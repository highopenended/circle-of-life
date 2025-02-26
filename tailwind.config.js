/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mauve: {
          light: '#E6D7E6',
          dark: '#9E8B9E',
        }
      },
      backgroundColor: {
        'transparent-white': 'rgba(255, 255, 255, 0.9)',
      }
    },
  },
  plugins: [],
} 