/** @type {import('tailwindcss').Config} */
import { Palette } from "./src/theme/Palette";
import { typography } from "./src/theme/Typography";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        headlineMedium: {
          css: {
            fontFamily: typography.headlineMedium.fontFamily,
            fontSize: typography.headlineMedium.fontSize,
            fontWeight: typography.headlineMedium.fontWeight,
            lineHeight: typography.headlineMedium.lineHeight,
            letterSpacing: typography.headlineMedium.letterSpacing,
          },
        },
        bodyMedium: {
          css: {
            fontFamily: typography.bodyMedium.fontFamily,
            fontSize: typography.bodyMedium.fontSize,
            fontWeight: typography.bodyMedium.fontWeight,
            lineHeight: typography.bodyMedium.lineHeight,
            letterSpacing: typography.bodyMedium.letterSpacing,
          },
        },
      },
      colors: {
        primary: Palette.primary.main,
        // Add more colors here as needed.
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
