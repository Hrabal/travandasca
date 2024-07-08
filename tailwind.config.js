/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Patua One"'],
        serif: ['Roboto']
      }
    },
    colors: {
      main: '#0B2466ff',
      sea: '#00AFCCff',
      white: '#E3EBE4ff',
      red: '#EE426Cff',
      blue: '#3B1D5Eff'
    }
  },
  plugins: []
}
