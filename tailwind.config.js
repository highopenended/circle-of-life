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
          medium: '#C4B0C4',
          dark: '#9E8B9E',
          darker: '#8A6F8A',
        }
      },
      backgroundColor: {
        'transparent-white': 'rgba(255, 255, 255, 0.9)',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
} 