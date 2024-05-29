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
    extend: {},
  },
}


export const plugins = [import("tailwindcss-animate")];
