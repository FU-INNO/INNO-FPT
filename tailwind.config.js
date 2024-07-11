module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik"],
    },
    extend: {
      screens: {
        xs: "300px",
        ip: "800px",
      },
      colors: {
        "custom-white": "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
