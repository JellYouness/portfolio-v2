import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4ade80",
          main: "#16a34a",
          dark: "#166534",
        },
      },
      animation: {
        "slide-top": "slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
