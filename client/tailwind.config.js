/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-400": "#B4B9ED",
        "custom-blue-300": "#A8AFF7",
      },
    },
  },
  plugins: [],
};
