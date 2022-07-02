/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    './public/index.html',
    "./tailwind.config.js","./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),    
  ],
}
