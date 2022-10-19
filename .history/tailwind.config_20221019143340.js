/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    extend: {
      colors: {
        primary: "",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
