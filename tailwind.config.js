module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      red: "#880F0F",
    }),

    fontFamily: {
      race: ["Racing Sans One", "sans-serif"],
      electro: ["Electrolize", "sans-serif"],
    },
    extend: {
      textColor: (theme) => theme("colors"),
      textColor: {
        red: "#880F0F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
