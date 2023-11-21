/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          primary: "#A2003F",
          secondary: "#FCE7F3",
          grey: "#F5F4F4",
          darkgrey: "#504F59",
          dark: "#2A2227",
          pink: "#EF75AA",
        },
      },
  },
  plugins: [],
  darkMode: "class",
  mode: 'jit',
};

