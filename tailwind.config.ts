/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "black-primary" : "#3A3A3A",
        "black-secondary" : "#6C757D",
        "hover-text-color" : "#922c88",
      },
      backgroundColor : {
        "white-primary" : "#ffffff",
        "rounded-user" : "#d3d3dd",
        "black-primary" : "#3A3A3A",
        "black-secondary" : "#6C757D",
        "button-color" : "#922c88",
        "hover-button-color" : "#73236b",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "balloon-lg": "url('/login/balloon-lg.jpg')",
        "balloon": "url('/login/balloon.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
