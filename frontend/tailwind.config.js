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
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'purple-650': '#662671',
        'gold-300': '#F4EDAF',
        'gray-333': '#E0E0E0',
      },
    },
  },
}


export const plugins = [import("tailwindcss-animate")];
