/** @type {import('tailwindcss').Config} */


export const darkMode = ["class"];

export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];

export default {
  theme: {
    extend: {
      colors: {
        'purple-650': '#662671',
        'gold-300': '#F4EDAF',
      },
    },
  },
}


export const plugins = [import("tailwindcss-animate")];
