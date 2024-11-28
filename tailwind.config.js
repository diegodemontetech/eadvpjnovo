/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        'title': '24px',
        'subtitle': '18px',
        'base': '14px',
        'button': '16px',
      },
    },
  },
  plugins: [],
};