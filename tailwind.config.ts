import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 👈 make sure Tailwind scans all app files
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#1455FE", // 👈 used by text-brand, border-brand, etc.
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
