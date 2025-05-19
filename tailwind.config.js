/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */
/* Tokens - Mode 1 */
module.exports = {
  theme: {
    extend: {
      spacing: {
        "font-size-h1": "205px",
        "font-size-h2": "85px",
        "font-size-h3": "27px",
        "font-size-body": "28px",
        "font-size-link": "12px",
        "font-size-h1-sm": "50px",
        "font-size-h2-sm": "35px",
        "font-size-h3-sm": "11px",
        "font-size-body-sm": "12px",
        "font-size-link-sm": "10px",
        "shadow-drop-50": "50px",
        "shadow-inner-25": "25px",
        "border-radius-none": "0px",
        "border-radius-9": "9px",
        "border-radius-32": "32px",
        "spacing-xxs": "8px",
        "spacing-xs": "16px",
        "spacing-s": "24px",
        "spacing-sm": "32px",
        "spacing-m": "40px",
        "spacing-ml": "48px",
        "spacing-lg": "64px",
        "spacing-xl": "80px",
        "spacing-2xl": "96px",
        "spacing-3xl": "112px",
        "spacing-4xl": "128px",
        "spacing-5xl": "268px",
        "spacing-7xl": "320px",
        "spacing-8xl": "376px",
        "spacing-9xl": "468px",
        "font-weight-regular": "400px",
        "font-weight-bold": "700px",
        "font-weight-black": "900px"
      },
      customProperties: {
        "font-family-orbitron": "Orbitron"
      },
    }
  }
};
/* Tokens - Mode 1 */
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
          50: "#E4E5FBFF",
          100: "#CDD0F9FF",
          200: "#979DF2FF",
          300: "#666EEBFF",
          400: "#2F3BE4FF",
          500: "#1925C0FF",
          600: "#141D99FF",
          700: "#0F1675FF",
          800: "#0A0E4DFF",
          900: "#050829FF",
          950: "#020312FF",
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


/* Primitives - Mode 1 */
module.exports = {
  theme: {
    extend: {
      colors: {
        "exceptiveblå": "#1925C0FF",
        "grey-950": "#0F1014FF",
        "grey-900": "#1F2029FF",
        "grey-800": "#3B3D4EFF",
        "grey-700": "#5A5D77FF",
        "grey-600": "#7D7F9CFF",
        "grey-500": "#A3A5B9FF",
        "grey-400": "#B7B8C8FF",
        "grey-300": "#C8C9D5FF",
        "grey-200": "#D9DAE2FF",
        "grey-100": "#EEEEF2FF",
        "grey-50": "#F6F6F8FF",
        "black-950": "#000000FF",
        "black-900": "#000000FF",
        "black-800": "#000000FF",
        "black-700": "#000000FF",
        "black-600": "#000000FF",
        "black-500": "#000000FF",
        "black-400": "#333333FF",
        "black-300": "#666666FF",
        "black-200": "#999999FF",
        "black-100": "#CCCCCCFF",
        "black-50": "#E6E6E6FF",
        "blue-950": "#020312FF",
        "blue-900": "#050829FF",
        "blue-800": "#0A0E4DFF",
        "blue-700": "#0F1675FF",
        "blue-600": "#141D99FF",
        "blue-500": "#1925C0FF",
        "blue-400": "#2F3BE4FF",
        "blue-300": "#666EEBFF",
        "blue-200": "#979DF2FF",
        "blue-100": "#CDD0F9FF",
        "blue-50": "#E4E5FBFF"
      },
    }
  }
};