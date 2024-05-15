const path = require('path');

module.exports = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.cjs'),
    },
    autoprefixer: {},
  },
};