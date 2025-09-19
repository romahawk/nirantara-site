/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: "#1455FE", // enables text-brand, bg-brand, etc.
      },
    },
  },
  plugins: [],
};
