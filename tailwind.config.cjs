/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      colors: {
        hpi: {
          blue: '#007a9e',
          gray: '#5a6065',
          orange: '#dd6108',
          red: '#b1063a',
          yellow: '#f6a800',
        },
      },
    },
  },
  plugins: [],
};
