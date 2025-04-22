/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'plant': {
          50: '#f0f9f0',
          100: '#dbf0db',
          200: '#bae0bc',
          300: '#8ec892',
          400: '#5eaa65',
          500: '#3e8c46',
          600: '#2f7035',
          700: '#275b2d',
          800: '#234a27',
          900: '#1e3d22',
        }
      }
    },
  },
  plugins: [],
};