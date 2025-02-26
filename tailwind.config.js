/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightgray: "#cecece",
        "color-blue": "#2f4f9e",
        "color-green": "#319966",
        gray: "rgba(255, 255, 255, 0)",
        dimgray: "#6e6e6e",
        black: "#000",
      },
      spacing: {
        boundvariablesdata: "24px",
        "4px": "4px",
        "14.5px": "14.5px",
        "15px": "15px",
      },
      fontFamily: {
        cairo: "Cairo",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "7xl": "26px",
        "smi-7": "12.7px",
        "mid-1": "17.1px",
        "5xl-1": "24.1px",
        "8xl-9": "27.9px",
        "4xl-2": "23.2px",
      },
    },
    fontSize: {
      "3xs-7": "9.7px",
      "5xs-7": "7.7px",
      "13xl-3": "32.3px",
      "5xs-9": "7.9px",
      "29xl": "48px",
      "4xl-1": "23.1px",
      "5xs-4": "7.4px",
      "3xs-3": "9.3px",
      "smi-5": "12.5px",
      "sm-5": "13.5px",
      "lgi-2": "19.2px",
      "3xl-7": "22.7px",
      lg: "18px",
      "lg-2": "18.2px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  variants: {
    extend: {
      padding: ["responsive"],
    },
  },

  plugins: [],
};
