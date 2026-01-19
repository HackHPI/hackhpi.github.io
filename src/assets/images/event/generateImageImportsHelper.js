// usage:
// move this file into the directory with images and run `node generateImageImportsHelper.js`
// it will generate Images${year}.js with all images imported and exported as an array
// then you can import it in your main Images.js file

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

const importStatements = files.map((f, i) =>
    `import I${i} from './${f}';`
).join('\n');

const exportArray = `export default [${files.map((_, i) => `I${i}`).join(', ')}];`;

const year = '2025';
fs.writeFileSync(`src/assets/images/event/${year}/Images${year}.js`, importStatements + '\n' + exportArray);

