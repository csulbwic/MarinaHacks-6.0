/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hue1: "#EEFDFF",
        hue2: "#DAF6FF",
        hue3: "#C5EFFF",
        hue4: "#9BE0FF",
        hue5: "#71D1FF",
        hue6: "#5CCAFF",
        hue7: "#47C2FF",
        navtransition1: "#A2D2FF",
        navtransition2: "#BDE0FE",
        navtransition3: "#FEFFFF",
        navbtn: "#FFC1D8",
        navtext: "#FFE6F0",
        waveTop: "#FCE4D8",
        waveBottom: "#DFF9FF",
        brandPink: "#FBACCC",
        foreground: "#625F5F",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        preahvihear: ['Preahvihear', 'sans-serif'],
      },
      animation: {
        float: "floatY 5.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};