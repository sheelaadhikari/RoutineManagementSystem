/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'custom-blue-400':'#B4B9ED',
        'custom-blue-300':'#A8AFF7',
      }
    },
  },
  plugins: [],
}

