/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(10 33 78)",
        golden: "rgb(204 153 0)",
        slate: "rgb(45 45 45)",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
      },
      animation: {
        spinRev: "spinRev 1s linear infinite",
      },
      keyframes: {
        spinRev: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
