/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lumina-amber': '#FFB400',
        'lumina-emerald': '#10B981',
      },
    },
  },
  plugins: [],
};