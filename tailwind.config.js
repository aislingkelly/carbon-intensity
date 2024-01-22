/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['nord', 'forest', 'retro', 'dim', 'emerald'],
  },
  // safelist the classes for dynamically generated bg class on cards
  safelist: [
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-200 to-red-200',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-200 to-orange-200',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-200 to-yellow-200',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-200 to-blue-200',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-200 to-green-200',
  ],
};
