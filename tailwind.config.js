/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lgs: "1320px",
      },
      fontFamily: {
        plexs: ['"IBM Plex Mono"', 'monospace'],
        helvetica: ['"Helvetica Neue"']
         // Define a name for the font
      }
    },
  },
  plugins: [],
};
