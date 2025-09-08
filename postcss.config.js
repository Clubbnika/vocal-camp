// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };

// export default config;

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // Використовуйте новий плагін замість 'tailwindcss'
    autoprefixer: {},
  },
};