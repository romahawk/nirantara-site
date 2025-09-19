import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // <-- Make sure Tailwind scans your app
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#1455FE",               // <-- Enables text-brand, bg-brand, etc.
      },
      // If you want to keep using your custom .container in globals.css,
      // you can remove the container config below.
      // container: {
      //   center: true,
      //   padding: { DEFAULT: "1rem", lg: "2rem" },
      //   screens: { "2xl": "1200px" },
      // },
    },
  },
  plugins: [],
} satisfies Config;
