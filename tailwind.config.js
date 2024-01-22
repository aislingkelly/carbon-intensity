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
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-200 to-slate-300',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-200 to-purple-300',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-200 to-orange-300',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-200 to-cyan-300',
    'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-200 to-emerald-300',
  ],
};
