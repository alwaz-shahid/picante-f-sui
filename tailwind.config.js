module.exports = {
  content: [
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/**/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "480px",
        smobile: "320px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        smax: "1600px",
      },
      fontFamily: {
        stick: "Stick No Bills",
        pop: "Poppins",
        noto: "Noto Sans",
      },
      width: { 128: "32rem" },
      maxWidth: { "8xl": "100rem" },
    },
  },
  plugins: [],
};
