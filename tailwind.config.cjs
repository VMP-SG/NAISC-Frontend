/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#6F6AF8',
        'gray-light': '#F6F7FB',
        'gray': '#BAB9C1'
      },
      animation: {
        'spinner': 'spin 1s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
