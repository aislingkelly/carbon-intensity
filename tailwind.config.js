/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['nord'],
  },
  // safelist the classes for dynamically generated bg class on cards
  safelist: [{ pattern: /^bg-(red|green|blue|yellow|orange)-500$/ }],
};
