/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ],
}