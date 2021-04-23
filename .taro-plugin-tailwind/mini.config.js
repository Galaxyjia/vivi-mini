/* eslint-disable import/no-commonjs */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
  darkMode: "media",
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {
      // ...
     scale: ['active', 'group-hover'],
    }
  },
  theme: {
    extend: {
      animation: {
        "scale-up-center":
          "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "scale-down-center":
          "scale-down-center 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: "scale(.5)",
          },
          to: {
            transform: "scale(1)",
          },
        },
        "scale-down-center": {
          "0%": {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(.5)",
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      colors: {
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        red: colors.red,
      },
    },
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1_2": "50%",
      "1_3": "33.333333%",
      "2_3": "66.666667%",
      "1_4": "25%",
      "2_4": "50%",
      "3_4": "75%",
      "1_5": "20%",
      "2_5": "40%",
      "3_5": "60%",
      "4_5": "80%",
      "1_6": "16.666667%",
      "2_6": "33.333333%",
      "3_6": "50%",
      "4_6": "66.666667%",
      "5_6": "83.333333%",
      "1_12": "8.333333%",
      "2_12": "16.666667%",
      "3_12": "25%",
      "4_12": "33.333333%",
      "5_12": "41.666667%",
      "6_12": "50%",
      "7_12": "58.333333%",
      "8_12": "66.666667%",
      "9_12": "75%",
      "10_12": "83.333333%",
      "11_12": "91.666667%",
      full: "100%",
      screen: "100vw",
      "cardwidth":"172px",
      "cardimagewidth":"160px"
    }),
    height: (theme) => ({
      auto: "auto",
      ...theme("width"),
      screen: "100vh",
      "100":"960px",
      "cardimageheight":"240px",
      "cardheight": "308px",
    }),
    maxHeight: {
      full: "100%",
      screen: "100vh",
    },
  },
};
