/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,css}'],
  theme: {
    colors: {
      blue: {
        400: '#676FFF',
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
        400: '#384459',
        500: '#283142',
        600: '#242C3B',
        800: '#1B2531',
      },
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      transitionProperty: {
        outline: 'outline',
      },
    },
    screens: {
      md: '576px',
      lg: '992px',
    },
  },
  plugins: [],
};
