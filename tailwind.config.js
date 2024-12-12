/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plexs: ['"IBM Plex Mono"', 'monospace'],
        helvetica: ['"Helvetica Neue"', 'Arial', 'sans-serif']
         // Define a name for the font
      }
    },
  },
  // plugins: [require('daisyui'),],
}

