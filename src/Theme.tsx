import { createTheme } from "@material-ui/core/styles";

declare module "@material-ui/core/styles/createTheme" {
  interface ThemeOptions {
    themeName?: string;
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    portfolio: {
      pink: React.CSSProperties["color"];
      green: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
      altGrey: React.CSSProperties["color"];
    };
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    h1: { transition: React.CSSProperties["transition"] };
    h2: { transition: React.CSSProperties["transition"] };
    h3: { transition: React.CSSProperties["transition"] };
    h4: { transition: React.CSSProperties["transition"] };
    h5: { transition: React.CSSProperties["transition"] };
    body1: { transition: React.CSSProperties["transition"] };
    body2: { transition: React.CSSProperties["transition"] };
  }
}

const scaffolding = createTheme({
  spacing: 4
});

const portfolio = {
  pink: "#E556A2",
  green: "#48EC95",
  dark: "#453751",
  altGrey: "#A9A2AF"
};

const typography = {
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

export const theme = createTheme({
  themeName: "kevin-portfolio-theme-light",
  spacing: 4,
  palette: {
    portfolio
  },
  typography: {
    ...scaffolding.typography,
    ...typography,
    fontFamily: "Open Sans, sans-serif"
  },
  overrides: {
    MuiTypography: {
      root: {
        color: portfolio.dark
      },
      gutterBottom: {
        marginBottom: scaffolding.spacing(8)
      }
    }
  }
});
