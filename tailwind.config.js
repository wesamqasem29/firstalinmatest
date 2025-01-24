/** @type {import('tailwindcss').Config} */
import { BreakPoints } from './tailwind-breakpoints'

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: BreakPoints,
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        merriweather: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
}

