/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "47.78px",
        h2: "39.81px",
        h3: "33.18px",
        h4: "27.65px",
        h5: "23.04px",
        p: "16px",
        small: "13.33px",
        ["x-small"]: "11.11px",
      },
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
      },
      fontSize: {
        sm: "0.833rem",
        base: "1rem",
        xl: "1.200rem",
        "2xl": "1.440rem",
        "3xl": "1.728rem",
        "4xl": "2.074rem",
        "5xl": "2.489rem",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      spacing: {
        "page-content": "1140px",
      },
      colors: {
        prime: "#F6F6F6",
        secondary: "#010101",
        third: "#D5F35A",
        fourth: "#FFFFFF",
        fifth: "#8C8C8C",
      },
      textColor: {
        prime: "#F6F6F6",
        secondary: "#010101",
        third: "#D5F35A",
        fourth: "#FFFFFF",
        fifth: "#8C8C8C",
      },
    },
  },
  plugins: [],
};
