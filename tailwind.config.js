/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        lightWhite: 'rgba(255,255,255,0.7)',
        darkGreen: '#3B873E',
        mainRed: '#F44336',
        regDarkText: '#000000DE',
        mainBlue: '#64B6F7',
        darkBlue: '#0057B2',
        bgHoverGray: '#E5E5E5',
        bgLightGray: '#F5F5F5',
        darkGray: '#9E9E9E',
        borderGray: '#0000003B',
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
