/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "600px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["14px", "22px"],
        lg: ["16px", "32px"],
        xl: ["28px", "56px"],
      },
      fontWeight: {
        regular: 400,
      },
      colors: {
        white: "#fff",
        green: "#209041",
        brown: "#ED6B06",
        primary: "#1B1B1B",
        black: "#000",
        darkgreen: "#043E44",
        lightgreen: "#2C595D",
        gray: "#7B7B7B",
        red: "#DC3A3A",
        lightWhite: "#F7F7F7"
      },
    },
  },
  plugins: [],
}
