#!/usr/bin/env node

/**
 * Image to WebP Converter Script with UUID-based Filenames
 * Node.js version for cross-platform compatibility (Windows, macOS, Linux)
 *
 * Converts images to WebP format, downscales to 1920x1080, and generates JS/TS import files
 * Uses UUID-based filenames for maximum web compatibility
 *
 * Usage: node convert-images.js [options]
 * Or as npm script: npm run convert-images
 */

import fs from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';
import { spawn } from 'child_process';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';
import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration object
const config = {
  inputDir: '.',
  outputDir: './webp_output',
  quality: 80,
  jsOutputFile: null, // Will be set to outputDir/images.js if not specified
  importPath: './',
  maxWidth: 1920,
  maxHeight: 1080,
  supportedExtensions: ['.jpg', '.jpeg', '.png', '.tiff', '.tif', '.bmp', '.gif', '.webp'],
  skipExisting: false,
  verbose: false
};

// Statistics tracking
const stats = {
  totalFiles: 0,
  convertedFiles: 0,
  failedFiles: 0,
  skippedFiles: 0,
  totalOriginalSize: 0,
  totalConvertedSize: 0,
  startTime: Date.now()
};

// Array to store converted image info
const convertedImages = [];

/**
 * Console output utilities with colors
 */
const logger = {
  info: (message) => console.log(chalk.blue('[INFO]'), message),
  success: (message) => console.log(chalk.green('[SUCCESS]'), message),
  warning: (message) => console.log(chalk.yellow('[WARNING]'), message),
  error: (message) => console.log(chalk.red('[ERROR]'), message),
  verbose: (message) => {
    if (config.verbose) console.log(chalk.gray('[VERBOSE]'), message);
  }
};

/**
 * Check if ImageMagick is installed and available
 */
async function checkImageMagick() {
  const commands = ['magick', 'convert'];

  for (const cmd of commands) {
    try {
      await execCommand(cmd, ['--version'], { timeout: 5000 });
      logger.verbose(`Found ImageMagick command: ${cmd}`);
      return cmd;
    } catch (error) {
      logger.verbose(`Command '${cmd}' not found`);
      continue;
    }
  }

  throw new Error('ImageMagick is not installed or not in PATH. Please install ImageMagick first.');
}

/**
 * Execute a command and return the result
 */
function execCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const timeout = options.timeout || 30000;
    const child = spawn(command, args, {
      stdio: options.capture ? 'pipe' : 'inherit',
      shell: process.platform === 'win32'
    });

    let stdout = '';
    let stderr = '';

    if (options.capture) {
      child.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr?.on('data', (data) => {
        stderr += data.toString();
      });
    }

    const timer = setTimeout(() => {
      child.kill();
      reject(new Error(`Command timeout after ${timeout}ms`));
    }, timeout);

    child.on('close', (code) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve({ stdout: stdout.trim(), stderr: stderr.trim() });
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderr}`));
      }
    });

    child.on('error', (error) => {
      clearTimeout(timer);
      reject(error);
    });
  });
}

/**
 * Get image dimensions using ImageMagick
 */
async function getImageDimensions(filePath, magickCommand) {
  try {
    const args = magickCommand === 'magick'
      ? ['identify', '-format', '%wx%h', filePath]
      : ['-identify', '-format', '%wx%h', filePath];

    const result = await execCommand(magickCommand, args, { capture: true, timeout: 10000 });
    return result.stdout.trim();
  } catch (error) {
    logger.verbose(`Failed to get dimensions for ${filePath}: ${error.message}`);
    return 'unknown';
  }
}

/**
 * Get file size in bytes
 */
async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

/**
 * Format file size in human readable format
 */
function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Generate UUID for filename
 */
function generateUUID() {
  return randomUUID();
}

/**
 * Create web-safe filename using UUID
 */
function createWebSafeFilename(originalFilename) {
  const uuid = generateUUID();
  return `${uuid}.webp`;
}

/**
 * Sanitize filename for JavaScript variable names
 */
function sanitizeJsName(filename) {
  // Remove extension
  const nameWithoutExt = path.parse(filename).name;

  // Replace special characters and convert to camelCase
  let jsName = nameWithoutExt
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase());

  // Ensure it starts with a letter or prepend 'img'
  if (/^[0-9]/.test(jsName)) {
    jsName = 'img' + jsName;
  }

  // Ensure first letter is lowercase for camelCase
  jsName = jsName.charAt(0).toLowerCase() + jsName.slice(1);

  return jsName || 'image';
}

/**
 * Convert a single image to WebP
 */
async function convertImage(inputFile, outputFile, magickCommand) {
  const args = [];

  if (magickCommand === 'magick') {
    args.push('convert');
  }

  args.push(
    inputFile,
    '-auto-orient',
    '-strip',
    '-colorspace', 'sRGB',
    '-resize', `${config.maxWidth}x${config.maxHeight}>`,
    '-quality', config.quality.toString(),
    '-define', 'webp:method=6',
    outputFile
  );

  await execCommand(magickCommand, args, { timeout: 60000 });
}

/**
 * Find all image files in the input directory
 */
async function findImageFiles(inputDir) {
  const files = [];

  try {
    const entries = await fs.readdir(inputDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (config.supportedExtensions.includes(ext)) {
          files.push(path.join(inputDir, entry.name));
        }
      }
    }
  } catch (error) {
    throw new Error(`Failed to read input directory: ${error.message}`);
  }

  return files;
}

/**
 * Process a single image file
 */
async function processImage(inputFile, magickCommand, spinner) {
  const originalFilename = path.basename(inputFile);
  const uuidFilename = createWebSafeFilename(originalFilename);
  const outputFile = path.join(config.outputDir, uuidFilename);
  const jsVariableName = sanitizeJsName(originalFilename);

  stats.totalFiles++;
  spinner.text = `Processing: ${originalFilename}`;

  // Skip if output exists and skipExisting is true
  if (config.skipExisting && existsSync(outputFile)) {
    logger.verbose(`Skipping ${originalFilename} - output exists`);
    stats.skippedFiles++;
    return null;
  }

  try {
    // Get original file info
    const originalSize = await getFileSize(inputFile);
    const originalDimensions = await getImageDimensions(inputFile, magickCommand);
    stats.totalOriginalSize += originalSize;

    // Convert the image
    await convertImage(inputFile, outputFile, magickCommand);

    // Get converted file info
    const convertedSize = await getFileSize(outputFile);
    const convertedDimensions = await getImageDimensions(outputFile, magickCommand);
    const convertedSizeHuman = formatFileSize(convertedSize);
    stats.totalConvertedSize += convertedSize;

    // Calculate compression ratio
    const compressionRatio = originalSize > 0
      ? ((originalSize - convertedSize) * 100 / originalSize).toFixed(1)
      : '0';

    const imageInfo = {
      originalName: originalFilename,
      jsName: jsVariableName,
      outputFile,
      dimensions: convertedDimensions,
      fileSize: convertedSizeHuman,
      uuidFilename,
      compressionRatio: parseFloat(compressionRatio)
    };

    convertedImages.push(imageInfo);
    stats.convertedFiles++;

    logger.verbose(`✓ ${originalFilename} → ${uuidFilename} (${compressionRatio}% smaller) [${convertedDimensions}] → JS: ${jsVariableName}`);

    return imageInfo;

  } catch (error) {
    stats.failedFiles++;
    logger.error(`✗ Failed to convert ${originalFilename}: ${error.message}`);
    return null;
  }
}

/**
 * Generate JavaScript imports file
 */
async function generateJsFile(jsFile) {
  logger.info(`Generating JavaScript imports file: ${jsFile}`);

  const relativePath = (outputFile) => {
    const rel = path.relative(path.dirname(jsFile), outputFile);
    return rel.replace(/\\/g, '/'); // Ensure forward slashes for imports
  };

  const adjustImportPath = (outputFile) => {
    const relPath = relativePath(outputFile);
    if (config.importPath === './') {
      return `./${relPath}`;
    }
    return `${config.importPath}/${path.basename(outputFile)}`;
  };

  let content = `/**
 * Auto-generated image imports
 * Generated by convert-images.js script with UUID-based filenames
 * 
 * Features:
 * - UUID-based filenames for maximum web compatibility
 * - Original filename preservation in metadata
 * - TypeScript support with .d.ts file
 * - Utility functions for image management
 * 
 * Usage:
 *   import { images, imageList } from './images.js';
 *   
 *   // Use individual imports
 *   <img src={images.myImage} alt="My Image" />
 *   
 *   // Find image by original name
 *   const img = getImageByOriginalName('photo.jpg');
 *   
 *   // Or iterate through all images
 *   imageList.forEach(img => console.log(img.originalName, img.src));
 */

// Individual image imports (UUID-based filenames)
`;

  // Add individual imports
  for (const img of convertedImages) {
    content += `import ${img.jsName} from '${adjustImportPath(img.outputFile)}';\n`;
  }

  content += `
// Images object for easy access
export const images = {
`;

  for (const img of convertedImages) {
    content += `  ${img.jsName},\n`;
  }

  content += `};

// Detailed image information with UUID mapping
export const imageList = [
`;

  for (const img of convertedImages) {
    const relPath = relativePath(img.outputFile);
    content += `  {
    name: '${img.jsName}',
    originalName: '${img.originalName}',
    src: ${img.jsName},
    filename: '${path.basename(img.outputFile)}',
    uuidFilename: '${img.uuidFilename}',
    path: '${relPath}',
    dimensions: '${img.dimensions}',
    fileSize: '${img.fileSize}'
  },
`;
  }

  content += `];

// Enhanced utility functions
export const getImageByName = (name) => {
  return imageList.find(img => img.name === name);
};

export const getImageByOriginalName = (originalName) => {
  return imageList.find(img => img.originalName === originalName);
};

export const getImageByFilename = (filename) => {
  return imageList.find(img => img.filename === filename || img.uuidFilename === filename);
};

export const getImagesByDimensions = (width, height) => {
  return imageList.filter(img => {
    const [w, h] = img.dimensions.split('x').map(Number);
    return w === width && h === height;
  });
};

export const getRandomImage = () => {
  return imageList[Math.floor(Math.random() * imageList.length)];
};

export const searchImages = (query) => {
  const lowerQuery = query.toLowerCase();
  return imageList.filter(img => 
    img.originalName.toLowerCase().includes(lowerQuery) ||
    img.name.toLowerCase().includes(lowerQuery)
  );
};

// Get all unique dimensions
export const getAvailableDimensions = () => {
  return [...new Set(imageList.map(img => img.dimensions))];
};

// Group images by dimensions
export const groupImagesByDimensions = () => {
  return imageList.reduce((groups, img) => {
    const dim = img.dimensions;
    if (!groups[dim]) groups[dim] = [];
    groups[dim].push(img);
    return groups;
  }, {});
};

// Export default as images object
export default images;
`;

  await fs.writeFile(jsFile, content, 'utf8');
  logger.success(`JavaScript file generated: ${jsFile}`);
}

/**
 * Generate TypeScript definitions file
 */
async function generateTsDefinitions(jsFile) {
  const tsFile = jsFile.replace(/\.js$/, '.d.ts');
  logger.info(`Generating TypeScript definitions: ${tsFile}`);

  let content = `/**
 * Auto-generated TypeScript definitions for image imports
 * Generated by convert-images.js script with UUID-based filenames
 */

export interface ImageInfo {
  name: string;
  originalName: string;
  src: string;
  filename: string;
  uuidFilename: string;
  path: string;
  dimensions: string;
  fileSize: string;
}

// Individual image imports
`;

  for (const img of convertedImages) {
    content += `declare const ${img.jsName}: string;\n`;
  }

  content += `
// Main exports
export declare const images: {
`;

  for (const img of convertedImages) {
    content += `  ${img.jsName}: string;\n`;
  }

  content += `};

export declare const imageList: ImageInfo[];

// Enhanced utility functions
export declare const getImageByName: (name: string) => ImageInfo | undefined;
export declare const getImageByOriginalName: (originalName: string) => ImageInfo | undefined;
export declare const getImageByFilename: (filename: string) => ImageInfo | undefined;
export declare const getImagesByDimensions: (width: number, height: number) => ImageInfo[];
export declare const getRandomImage: () => ImageInfo;
export declare const searchImages: (query: string) => ImageInfo[];
export declare const getAvailableDimensions: () => string[];
export declare const groupImagesByDimensions: () => Record<string, ImageInfo[]>;

export default images;
`;

  await fs.writeFile(tsFile, content, 'utf8');
  logger.success(`TypeScript definitions generated: ${tsFile}`);
}

/**
 * Generate filename mapping file for reference
 */
async function generateMappingFile() {
  const mappingFile = path.join(config.outputDir, 'filename-mapping.json');
  logger.info(`Generating filename mapping: ${mappingFile}`);

  const mapping = {
    mappings: convertedImages.map(img => ({
      originalName: img.originalName,
      uuidFilename: img.uuidFilename,
      jsVariableName: img.jsName,
      dimensions: img.dimensions,
      fileSize: img.fileSize,
      compressionRatio: `${img.compressionRatio}%`
    })),
    generated: new Date().toISOString(),
    totalImages: convertedImages.length,
    statistics: {
      totalFiles: stats.totalFiles,
      convertedFiles: stats.convertedFiles,
      failedFiles: stats.failedFiles,
      skippedFiles: stats.skippedFiles,
      originalSize: formatFileSize(stats.totalOriginalSize),
      convertedSize: formatFileSize(stats.totalConvertedSize),
      totalSavings: stats.totalOriginalSize > 0
        ? `${(((stats.totalOriginalSize - stats.totalConvertedSize) * 100) / stats.totalOriginalSize).toFixed(1)}%`
        : '0%'
    }
  };

  await fs.writeFile(mappingFile, JSON.stringify(mapping, null, 2), 'utf8');
  logger.success(`Filename mapping generated: ${mappingFile}`);
}

/**
 * Print statistics and usage examples
 */
function printSummary() {
  const duration = ((Date.now() - stats.startTime) / 1000).toFixed(1);

  console.log('\n' + chalk.cyan('=== Conversion Summary ==='));
  logger.info(`Total images found: ${stats.totalFiles}`);
  logger.success(`Successfully converted: ${stats.convertedFiles}`);

  if (stats.skippedFiles > 0) {
    logger.warning(`Skipped files: ${stats.skippedFiles}`);
  }

  if (stats.failedFiles > 0) {
    logger.error(`Failed conversions: ${stats.failedFiles}`);
  }

  if (stats.totalOriginalSize > 0 && stats.totalConvertedSize > 0) {
    const totalSavings = (((stats.totalOriginalSize - stats.totalConvertedSize) * 100) / stats.totalOriginalSize).toFixed(1);
    logger.info(`Original total size: ${formatFileSize(stats.totalOriginalSize)}`);
    logger.info(`Converted total size: ${formatFileSize(stats.totalConvertedSize)}`);
    logger.success(`Total space saved: ${totalSavings}%`);
  }

  logger.info(`Processing time: ${duration}s`);

  if (stats.convertedFiles > 0) {
    logger.success(`Conversion completed! Output files are in: ${config.outputDir}`);
    logger.success(`JavaScript imports file: ${config.jsOutputFile}`);
    logger.success(`TypeScript definitions: ${config.jsOutputFile.replace(/\.js$/, '.d.ts')}`);
    logger.success(`Filename mapping: ${path.join(config.outputDir, 'filename-mapping.json')}`);

    // Show usage example
    if (convertedImages.length > 0) {
      const firstImage = convertedImages[0];
      const jsFileName = path.basename(config.jsOutputFile, '.js');

      console.log('\n' + chalk.cyan('=== Usage Example ==='));
      console.log('// Import all images');
      console.log(`import { images, imageList, getImageByOriginalName } from './${jsFileName}';`);
      console.log('');
      console.log('// Use individual images');
      console.log(`<img src={images.${firstImage.jsName}} alt="${firstImage.originalName}" />`);
      console.log('');
      console.log('// Find by original filename');
      console.log(`const img = getImageByOriginalName('${firstImage.originalName}');`);
      console.log('if (img) {');
      console.log(`  console.log('Found:', img.originalName, '→', img.uuidFilename);`);
      console.log('}');
      console.log('');
      console.log('// Iterate through all images');
      console.log('imageList.forEach(img => {');
      console.log('  console.log(`${img.originalName} → ${img.uuidFilename} (${img.dimensions})`);');
      console.log('});');
    }
  } else {
    logger.warning('No images were converted.');
  }
}

/**
 * Main function
 */
async function main() {
  const spinner = ora('Initializing...').start();

  try {
    // Validate input directory
    if (!existsSync(config.inputDir)) {
      throw new Error(`Input directory '${config.inputDir}' does not exist`);
    }

    // Create output directory
    await fs.mkdir(config.outputDir, { recursive: true });

    // Create JS output directory if needed
    const jsDir = path.dirname(config.jsOutputFile);
    await fs.mkdir(jsDir, { recursive: true });

    spinner.text = 'Checking ImageMagick...';
    const magickCommand = await checkImageMagick();

    spinner.text = 'Finding image files...';
    const imageFiles = await findImageFiles(config.inputDir);

    if (imageFiles.length === 0) {
      spinner.fail('No image files found');
      return;
    }

    spinner.text = `Found ${imageFiles.length} image files. Starting conversion...`;
    logger.info(`Found ${imageFiles.length} image files to process`);

    // Process each image
    for (const imageFile of imageFiles) {
      await processImage(imageFile, magickCommand, spinner);
    }

    if (convertedImages.length > 0) {
      spinner.text = 'Generating output files...';
      await generateJsFile(config.jsOutputFile);
      await generateTsDefinitions(config.jsOutputFile);
      await generateMappingFile();
    }

    spinner.succeed(`Conversion completed! Processed ${convertedImages.length} images`);
    printSummary();

  } catch (error) {
    spinner.fail(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Command line interface
program
  .name('convert-images')
  .description('Convert images to WebP format with UUID-based filenames for maximum web compatibility')
  .version('1.0.0')
  .option('-i, --input <directory>', 'Input directory containing images', '.')
  .option('-o, --output <directory>', 'Output directory for converted images', './webp_output')
  .option('-q, --quality <number>', 'WebP quality (0-100)', '80')
  .option('-j, --js-output <file>', 'JavaScript output file path')
  .option('-p, --import-path <path>', 'Import path prefix for JS imports', './')
  .option('-w, --width <number>', 'Maximum width in pixels', '1920')
  .option('-h, --height <number>', 'Maximum height in pixels', '1080')
  .option('--skip-existing', 'Skip conversion if output file already exists', false)
  .option('-v, --verbose', 'Enable verbose logging', false)
  .action((options) => {
    // Update config with command line options
    config.inputDir = path.resolve(options.input);
    config.outputDir = path.resolve(options.output);
    config.quality = parseInt(options.quality, 10);
    config.jsOutputFile = options.jsOutput
      ? path.resolve(options.jsOutput)
      : path.join(config.outputDir, 'images.js');
    config.importPath = options.importPath;
    config.maxWidth = parseInt(options.width, 10);
    config.maxHeight = parseInt(options.height, 10);
    config.skipExisting = options.skipExisting;
    config.verbose = options.verbose;

    // Validate quality
    if (config.quality < 0 || config.quality > 100) {
      logger.error('Quality must be between 0 and 100');
      process.exit(1);
    }

    // Print configuration
    if (config.verbose) {
      console.log(chalk.cyan('Configuration:'));
      console.log(`  Input Directory: ${config.inputDir}`);
      console.log(`  Output Directory: ${config.outputDir}`);
      console.log(`  WebP Quality: ${config.quality}`);
      console.log(`  JS Output File: ${config.jsOutputFile}`);
      console.log(`  Import Path: ${config.importPath}`);
      console.log(`  Max Dimensions: ${config.maxWidth}x${config.maxHeight}`);
      console.log(`  Skip Existing: ${config.skipExisting}`);
      console.log('');
    }

    main().catch(error => {
      logger.error(`Fatal error: ${error.message}`);
      process.exit(1);
    });
  });

program.parse();
