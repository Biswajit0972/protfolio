/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Boogaloo", "serif"],
        secondary: ["Barriecito", "system-ui"]
      },
      colors: {
        "white-500": "#F8EDED",
        "black-500": "#10375C",
        orange: "#EB8317",
      },
    },
  },
  plugins: [],
};
