import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06232E",
        secondary: "#063C4D",
        thirdary: "#0089B4",
        green: "#00C575",
        red: "#9C354E",
        white: "#FAFDF9",
      },
    },
  },
  plugins: [],
};
export default config;
