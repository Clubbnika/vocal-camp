/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Вказує Tailwind шукати класи в цих файлах
  ],
  theme: {
    extend: {
      fontFamily: {
        'wix-madefor-display': ['"Wix Madefor Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}