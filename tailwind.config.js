/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      orange: "#D87D4A",
      lightorange: "#D87D4A",
      white: "#FFFFFF",
      lightblack: "#FFFFFF",
      black: "#000000",
      gray: "#F1F1F1",
      lightgray: "#FAFAFA",
    },
    extend: {},
  },
  plugins: [],
};
