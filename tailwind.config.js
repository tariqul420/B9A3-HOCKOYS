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
        "heading": "#131318",
        "heading-d": "#fff",
        "paragraph": "#13131899",
        "paragraph-d": "#ffffffa6",
      },
      backgroundImage: {
        'img-2': "url('/images/2.png')",
        'img-3': "url('/images/3.png')",
        'img-4': "url('/images/4.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
