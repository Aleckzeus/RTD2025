/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rtd: {
          'deep-blue': '#02336d',
          'navy': '#001e44',
          'mid-blue': '#0172dc',
          'sky': '#59aeff',
          'offwhite': '#f8faf8',
          'gold': '#fac522',
        }
      },
      backgroundColor: {
        'site': '#ffffff',
      }
    },
  },
  plugins: [],
};
