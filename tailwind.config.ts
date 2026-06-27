import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4920A",
          hover: "#B87D08",
        },
        dark: "#111111",
        secondary: "#6B6B6B",
        "off-white": "#F5F5F5",
        border: "#E5E5E5",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
