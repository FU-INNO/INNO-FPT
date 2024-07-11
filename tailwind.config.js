export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  fontFamily: {
  },
  extend: {
    screens: {
      xs: "300px",
      ip: "800px",
    },
    colors: {
      "custom-white": "rgba(255, 255, 255, 0.3)",
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
};
export const plugins = [];
