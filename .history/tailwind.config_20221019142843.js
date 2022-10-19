/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./component/*.{html,js}"],
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
