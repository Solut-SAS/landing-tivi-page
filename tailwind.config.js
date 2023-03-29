module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "sans-serif",
    },
    container: {
      padding: {
        default: "1rem",
        lg: "30px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    colors: {
      dark: "#292830",
      light: "#BDBDBD",
      accent: "#FF7235",
      accentHover: "#e05216",
      grey: "#F5F5F5",
    },
    extend: {},
  },
  plugins: [],
};
