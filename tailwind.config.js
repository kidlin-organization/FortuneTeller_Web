/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6", // Purple-500
          light: "#A78BFA", // Purple-400
          dark: "#7C3AED", // Purple-600
          lighter: "#C4B5FD", // Purple-300
        },
        secondary: {
          DEFAULT: "#F59E0B", // Amber-500
          light: "#FBBF24", // Amber-400
          dark: "#D97706", // Amber-600
          lighter: "#FCD34D", // Amber-300
        },
        dark: {
          DEFAULT: "#18181B", // Zinc-900
          light: "#27272A", // Zinc-800
          lighter: "#3F3F46", // Zinc-700
          lightest: "#52525B", // Zinc-600
        },
        accent: {
          purple: "#9333EA", // Purple-600
          amber: "#F59E0B", // Amber-500
          indigo: "#4F46E5", // Indigo-600
        },
      },
      keyframes: {
        widen: {
          "0%": { width: "75%" },
          "100%": { width: "100%" },
        },
        narrow: {
          "0%": { width: "100%" },
          "100%": { width: "75%" },
        },
      },
      animation: {
        widen: "widen 0.5s ease-in-out forwards",
        narrow: "narrow 0.5s ease-in-out forwards",
        "spin-slow": "spin 75s linear infinite",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      scrollbar: ["rounded"], // Scrollbar yuvarlama
    },
  },
};
