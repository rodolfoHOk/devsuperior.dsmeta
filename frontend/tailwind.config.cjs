/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    colors: {
      blue: {
        700: '#102347',
      },
      gray: {
        100: '#E9E9E9',
        200: '#CFCFCF',
        300: '#9AAABE',
        600: '#5F6E82',
        900: '#181818',
      },
      red: {
        500: '#FF6B72',
      },
      zinc: {
        200: '#676FFF',
        500: '#283142',
        800: '#1B2531',
      },
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
};
