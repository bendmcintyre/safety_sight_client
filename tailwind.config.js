module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
     './public/index.html',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  }
}