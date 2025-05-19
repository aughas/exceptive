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


/* Primitives - Mode 1 */
module.exports = {
  theme: {
    extend: {
      colors: {
        "exceptiveblå": "rgba(25, 37, 192, 1)",
        "grey-950": "rgba(15, 16, 20, 1)",
        "grey-900": "rgba(31, 32, 41, 1)",
        "grey-800": "rgba(59, 61, 78, 1)",
        "grey-700": "rgba(90, 93, 119, 1)",
        "grey-600": "rgba(125, 127, 156, 1)",
        "grey-500": "rgba(163, 165, 185, 1)",
        "grey-400": "rgba(183, 184, 200, 1)",
        "grey-300": "rgba(200, 201, 213, 1)",
        "grey-200": "rgba(217, 218, 226, 1)",
        "grey-100": "rgba(238, 238, 242, 1)",
        "grey-50": "rgba(246, 246, 248, 1)",
        "black-950": "rgba(0, 0, 0, 1)",
        "black-900": "rgba(0, 0, 0, 1)",
        "black-800": "rgba(0, 0, 0, 1)",
        "black-700": "rgba(0, 0, 0, 1)",
        "black-600": "rgba(0, 0, 0, 1)",
        "black-500": "rgba(0, 0, 0, 1)",
        "black-400": "rgba(51, 51, 51, 1)",
        "black-300": "rgba(102, 102, 102, 1)",
        "black-200": "rgba(153, 153, 153, 1)",
        "black-100": "rgba(204, 204, 204, 1)",
        "black-50": "rgba(230, 230, 230, 1)",
        "blue-950": "rgba(2, 3, 18, 1)",
        "blue-900": "rgba(5, 8, 41, 1)",
        "blue-800": "rgba(10, 14, 77, 1)",
        "blue-700": "rgba(15, 22, 117, 1)",
        "blue-600": "rgba(20, 29, 153, 1)",
        "blue-500": "rgba(25, 37, 192, 1)",
        "blue-400": "rgba(47, 59, 228, 1)",
        "blue-300": "rgba(102, 110, 235, 1)",
        "blue-200": "rgba(151, 157, 242, 1)",
        "blue-100": "rgba(205, 208, 249, 1)",
        "blue-50": "rgba(228, 229, 251, 1)"
      },
    }
  }
};