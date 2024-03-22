/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue-600':' #7C83CC',
        "custom-blue-500": "#7C83CC",
        "custom-blue-400": "#B4B9ED",
        "custom-blue-300": "#A8AFF7",
        'custom-blue-200':'#E2E5FF',

       
      },
    },
  },
  plugins: [],
};
