/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        "coral-red": "#ff4340",
        heading: "#131318",
        "heading-d": "#fff",
        paragraph: "#13131899",
        "paragraph-d": "#ffffffa6",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
