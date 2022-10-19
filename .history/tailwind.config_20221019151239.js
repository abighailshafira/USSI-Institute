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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
