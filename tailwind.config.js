import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
        roboto: ["Roboto", "sans"],
        fairplay: ['"FairPlay Display"', "sans"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        "custom-opacity": "rgba(0,0,0,0.304)",
      },
      colors: {
        primary: "#00999c",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
