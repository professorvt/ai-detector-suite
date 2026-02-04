/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Wahi colours jo humne decide kiye the
        bgDark: "#000000",
        cardDark: "#141414",
        borderDark: "#333333",
        ai: {
          bg: "rgba(239, 68, 68, 0.2)",
          text: "#ef4444",
        },
        mixed: {
          bg: "rgba(234, 179, 8, 0.2)",
          text: "#eab308",
        },
        human: {
          bg: "rgba(34, 197, 94, 0.2)",
          text: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};
