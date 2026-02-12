/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
  },
  plugins: [],
}