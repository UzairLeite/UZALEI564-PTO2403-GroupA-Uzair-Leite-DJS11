/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', // Include your HTML file
      './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in the src folder
    ],
    theme: {
      extend: {}, // Extend Tailwind's default theme here if needed
    },
    plugins: [], // Add Tailwind plugins here if needed
  };