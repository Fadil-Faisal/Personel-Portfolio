/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all React files
  ],
  theme: {
    extend: {}, // Custom theme extensions go here
  },
  plugins: [],
}