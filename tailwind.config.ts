import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      "brand-color": "#4EE1A0",
      "desaturated-cyan": "#5FB4A2",
      "bright-red": "#F43030",
    },
    screens: {
      "1bp": { max: "1107px" },
      "2bp": { max: "1076px" },
      "3bp": { max: "967px" },
      "4bp": { max: "887px" },
      "5bp": { max: "783px" },
      "6bp": { max: "700px" },
      "7bp": { max: "540px" },
      "8bp": { max: "430px" },
      "9bp": { max: "389px" },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
