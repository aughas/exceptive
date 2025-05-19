/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    extend: {
      colors: {
        black: {
          50: "#E8E8E8",
          100: "#D1D1D1",
          200: "#A6A6A6",
          300: "#787878",
          400: "#313131",
          500: "#1F1F1F",
          600: "#1A1A1A",
          700: "#121212",
          800: "#0D0D0D",
          900: "#050505",
          950: "#030303",
        },
        blue: {
          50: "#E5EFFA",
          100: "#CBDEF6",
          200: "#97BEED",
          300: "#639DE4",
          400: "#2F7CDA",
          500: "#1E5DAA",
          600: "#184C8B",
          700: "#123968",
          800: "#0C2645",
          900: "#061323",
          950: "#030911",
        },
      },
      spacing: {
        xxs: "8px",
        xs: "16px",
        s: "24px",
        sm: "32px",
        m: "40px",
        ml: "48px",
        lg: "64px",
        xl: "80px",
        "2xl": "96px",
        "3xl": "112px",
        "4xl": "128px",
        "5xl": "160px",
        "6xl": "208px",
        "7xl": "320px",
        "8xl": "360px",
        "9xl": "424px",
      },
      boxShadow: {
        "drop-50": "0 4px 4px 0 rgba(76, 73, 65, 0.5)",
        "inner-50": "inset 0 4px 4px 0 rgba(76, 73, 65, 0.25)",
      },
      borderRadius: {
        34: "34px",
        50: "50px",
        none: "0px",
      },

      fontWeight: {
        light: "300", // Corrected Light weight
        regular: "400", // Corrected Roman (Regular) weight
        medium: "500", // Optional: If Neue Haas Grotesk has a medium weight
        bold: "700",
      },

      fontFamily: {
        display: ["neue-haas-grotesk-display", "sans-serif"],
        cooper: ["cooper-black-std", "serif"],
      },
      letterSpacing: {
        cooper: "0px",
      },

      fontSize: {
        small: ["20px", { lineHeight: "auto", letterSpacing: "1px" }],
        base: ["26px", { lineHeight: "29px", letterSpacing: "0px" }],
        bread: ["22px", { lineHeight: "auto", letterSpacing: "0px" }],
        medium: ["70px", { lineHeight: "55px" }],
        large: ["65px", { lineHeight: "50px" }],
        tiny: ["12px", { lineHeight: "auto", letterSpacing: "1px" }],
        slogan: ["35px", { lineHeight: "33px", letterSpacing: "0px" }],
      },
    },

    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
    ],
  },
};


