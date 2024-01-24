/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        lightWhite: 'rgba(255,255,255,0.7)',
      },
      fontFamily: {},
    },
    screens: {
      xs: '320px',
      ss: '620px',
      sm: '768px',
      md: '1020px',
      lg: '1200px',
      xl: '1600px',
    },
  },
  plugins: [],
}
