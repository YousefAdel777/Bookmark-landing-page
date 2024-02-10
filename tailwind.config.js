/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    colors: {
      "white": "#fff",
      "blue-300": "hsl(231, 69%, 60%)",
      "blue-100": "rgb(81 103 223 / 38%)",
      "blue-50": "rgb(83 104 223 / 23%)",
      "gray-blue-200": "#f6f6f6",
      "gray-blue-300": "#ccc",
      "gray-blue-500": "hsl(229, 8%, 60%)",
      "blue-800": "hsl(229, 31%, 21%)",
      "transparent-blue-800": "rgb(37 43 70 / 92%)",
      "red-300": "hsl(0, 94%, 66%)",
    },
    fontFamily: {
      "Rubik": ["Rubik", "sans-serif"],
    },
    extend: {
      fontSize: {
        "normal": "1.125rem",
        "3xl": "2rem",
        "6xl": "2.95rem",
      },
    },
  },
  plugins: [],
}
