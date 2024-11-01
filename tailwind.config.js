/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
      colors: {
        firstColor: ["var(--first-color)"],
        firstColorAlt: ["var(--first-color-alt)"],
        titleColor: ["var(--title-color)"],
        textColor: ["var(--text-color)"],
        textColorLight: ["var(--text-color-light)"],
        textColorLighten: ["var(--text-color-lighten)"],
        bodyColor: ["var(--body-color)"],
        containerColor: ["var(--container-color)"],
      },
      fontSize: {
        h1FontSize: ["var(--h1-font-size)"],
        h2FontSize: ["var(--h2-font-size)"],
        h3FontSize: ["var(--h3-font-size)"],
        h3FontSize: ["var(--h3-font-size)"],
        normalFontSize: ["var(--normal-font-size)"],
        smallFontSize: ["var(--small-font-size)"],
        smallerFontSize: ["var(--smaller-font-size)"],
        bodyColor: ["var(--body-color)"],
      },
    },
  },
  plugins: [],
};
