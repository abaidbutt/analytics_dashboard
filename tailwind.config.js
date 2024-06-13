/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "#1C1919",
        secondary: "#2C4A71",
        yellow: "#FFE353",
        red: "#C50024",
        borderColor: "#9D9D9D",
        buttonBg: "#F8F8F8",
        buttonDisabled: "#CCCCCC",
        menu: "#F0F0F0",
        shadowColor: "rgba(23, 3, 255, 0.1)",
      },
      fontFamily: {
        palanquin: ["Palanquin Dark", "sans-serif"],
      },
      boxShadow: {
        custom: "1px 1px 10px rgba(23, 3, 255, 0.1)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
