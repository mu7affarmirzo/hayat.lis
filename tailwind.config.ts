/** @type {import('tailwindcss').Config} */

import { colors } from "./src/shared/ui/colors"

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  important: '#root',
  theme: {
    extend: {
      colors,
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
