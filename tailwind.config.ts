import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          brand1: "#4529E6",
          brand2: "#5126EA",
          brand3: "#B0A6F0",
          brand4: "#EDEAFD",
        },
        grey: {
          "0": "#0B0D0D",
          "1": "#212529",
          "2": "#495057",
          "3": "#868E96",
          "4": "#ADB5BD",
          "5": "#CED4DA",
          "6": "#DEE2E6",
          "7": "#E9ECEF",
          "8": "#F1F3F5",
          "9": "#F8F9FA",
          "10": "#FDFDFD",
        },
        feedback: {
          alert1: "#CD2B31",
          alert2: "#FDD8D8",
          alert3: "#FFE5E5",
          success1: "#18794E",
          success2: "#CCEBD7",
          success3: "#DDF3E4",
        },
        randomprofile: {
          "1": "#e34d8c",
          "2": "#c04277",
          "3": "#7d2a4d",
          "4": "#7000ff",
          "5": "#6200e3",
          "6": "#36007d",
          "7": "#349974",
          "8": "#2a7d5f",
          "9": "#153d2e",
          "10": "#6100ff",
          "11": "#5700e3",
          "12": "#30007d",
        },
      },
      fontSize: {
        "heading-1": "2.75rem",
        "heading-2": "2.25rem",
        "heading-3": "2rem",
        "heading-4": "1.75rem",
        "heading-5": "1.5rem",
        "heading-6": "1.25rem",
        "heading-7": "1rem",
        "input-label": ".875rem",
        "input-placeholder": "1rem",
        "button-big-text": "1rem",
        "text-body-1": "1rem",
        "text-body-2": ".875rem",
      },
    },
  },
  plugins: [],
};
export default config;
