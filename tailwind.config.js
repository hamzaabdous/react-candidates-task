/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './public/index.html',
    "./tailwind.config.js","./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        'blue-Gray-400': '#708797',
        'blue-Gray-600': '#4D6475',
        'blue-Gray-900': '#1E2A32',
        'brandColorSecondary': '#0079FF',
        'brandColorPrimary': '#1B31A8',
        'blue-Gray-10':'#F4F8FA',
        'blue-Gray-50':'#E9EEF2',


      },
      fontFamily: {
        'Rubik': ['"Rubik"', 'sans-serif'],
        'Work-Sans': ['"Work Sans"', 'sans-serif']
      },
      width: {
        '560': '560px',
        '360': '360px',
        '18': '18em',

      },
      height: {
        '511': '511px',
        '586': '586px',

      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),    
  ],
}
