/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          300: '#FBBF24',
          400: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
};