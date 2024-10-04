/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#212529",
          600: "#818697",
          500: "#9b9b9b",
          400: "#bbbdc6",
          300: "#f0f2f6",
        },
        green: "#1ab98f",
        blue: "#2b7fff",
        orange: "#ea9b79",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
