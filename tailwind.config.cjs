const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Epilogue", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "Almost-White": "hsl(0, 0%, 98%)",
        "Medium-Gray": "hsl(0, 0%, 41%)",
        "Almost-Black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
