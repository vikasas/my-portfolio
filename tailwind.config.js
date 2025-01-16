/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        beige: 'rgb(237, 214, 182)',
        btnbg: 'rgb(237, 214, 182)',
        navbg: '#1D1E1F',
        smalltext: 'rgba(218, 197, 167, .6)',
        background: '#0E0E0E', 
        container:'rgb(26, 26, 26)',
        bordercol : ' #343230',
        hovercol:'rgba(218, 197, 167, 0.05)',
        skiltextcol:'#dac5a7',
        btntextcol :'rgb(29, 30, 31)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
      },
      animation: {
        slide: "slide 16s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
