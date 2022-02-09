import { baseTheme as scaffolding } from "./Base";

export const typography = {
  h1: {
    fontFamily: "Lora, serif",
    fontSize: "43.94px",
    lineHeight: "52px",
    fontWeight: 700,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "68.66px",
      lineHeight: "80px",
      fontWeight: 700
    }
  },
  h2: {
    fontFamily: "Lora, serif",
    fontSize: "35.16px",
    lineHeight: "44px",
    fontWeight: 700,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "43.94px",
      lineHeight: "52px",
      fontWeight: 700
    }
  },
  h3: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "28.12px",
    lineHeight: "32px",
    fontWeight: 700,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "35.16px",
      lineHeight: "44px",
      fontWeight: 700
    }
  },
  h4: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "22.5px",
    lineHeight: "28px",
    fontWeight: 700,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "28.12px",
      lineHeight: "32px",
      fontWeight: 700
    }
  },
  h5: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "22.5px",
    lineHeight: "28px",
    fontWeight: 400,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "28.12px",
      lineHeight: "32px",
      fontWeight: 400
    }
  },
  h6: {
    fontWeight: 700
  },
  body1: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14.4px",
    lineHeight: "24px",
    fontWeight: 400,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "18px",
      lineHeight: "32px",
      fontWeight: 400
    }
  },
  body2: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: "14.4px",
    lineHeight: "24px",
    fontWeight: 400,
    "--webkit-font-smoothing": "antialiased",
    textRendering: "optimizeLegibility",
    transition: "0.2s ease-out all",
    [scaffolding.breakpoints.up("md")]: {
      fontSize: "14.4x",
      lineHeight: "24px",
      fontWeight: 400
    }
  }
};
