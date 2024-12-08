import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { dark: "#FFF3E3", light: "#F9F1E7" },
        secondary: "#B88E2F",
        background: "#FFFFFF",
        headings: "#3A3A3A",
        grey: {
          darker: "#616161",
          mid: "#898989",
          light: "#9F9F9F",
          disable: "#B0B0B0",
        },
        off: "#E97171",
        on: "#2EC1AC",
        star: "#FFC700",
      },
      fontFamily: {
        logo: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
