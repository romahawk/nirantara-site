// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1455FE", foreground: "#ffffff" },
      },
      boxShadow: { header: "0 8px 30px rgba(0,0,0,.06)" },
      fontFamily: {
        // works if you added Inter via next/font and set --font-inter
        sans: ["var(--font-inter)", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      // simple, typed-safe overrides for prose in dark mode
      typography: {
        invert: {
          css: {
            "--tw-prose-body": "rgb(226 232 240)",   // slate-200
            "--tw-prose-headings": "rgb(255 255 255)",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;

export default config;
