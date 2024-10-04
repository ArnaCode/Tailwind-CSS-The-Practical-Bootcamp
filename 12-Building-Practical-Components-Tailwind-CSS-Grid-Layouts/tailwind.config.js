/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        // Layout 3
        "988px": "988px",
        "1356px": "1356px",

        // Layout 4
        "668px": "668px",
      },
    },
  },
  plugins: [],
};
