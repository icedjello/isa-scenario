import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        companyPink: "#D3408E",
        companyPurple: "#A06EA6",
        companyBlue: "#4EABE8",
      },
    },
  },
  plugins: [],
} satisfies Config;
