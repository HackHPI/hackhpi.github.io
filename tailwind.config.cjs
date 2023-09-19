/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      colors: {
        hackhpi: {
          primary: '#2332A6',
        },
        hpi: {
          blue: '#007a9e',
          gray: '#5a6065',
          orange: '#dd6108',
          red: '#b1063a',
          yellow: '#f6a800',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          },
        },
      },
    },
  },
};
