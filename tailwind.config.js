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
        small: ['Roboto', 'serif'], 
        ballet: ['Ballet', 'serif'], 
        name: ["Pinyon Script", 'serif'],
        popins :['Poppins', 'serif'],
      },
      animation: {
        slide: "slide 22s linear infinite",
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
