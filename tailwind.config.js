/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Вказує Tailwind шукати класи в цих файлах
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff00be',
      },
      fontFamily: {
        'wix-madefor-display': ['"Wix Madefor Display"', 'sans-serif'],
      },
    },
    plugins: [],
  }
}