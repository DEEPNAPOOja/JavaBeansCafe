/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107",
        primaryDark: "#FF9800",
        lightOrange: "#FFD700",
        darkGray: "#212121",
        lightGray: "#E0E0E0",
        secondary: "#03A9F4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
