import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    themeName?: string;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    portfolio: {
      pink: string;
      green: string;
      dark: string;
      altGrey: string;
      transparentWhite: string;
    };
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    h1: { transition: string };
    h2: { transition: string };
    h3: { transition: string };
    h4: { transition: string };
    h5: { transition: string };
    body1: { transition: string };
    body2: { transition: string };
  }
}

const scaffolding = createTheme({ spacing: 4 });

const portfolio = {
  pink: "#E556A2",
  green: "#48EC95",
  dark: "#453751",
  altGrey: "#A9A2AF",
  transparentWhite: "rgba(255,255,255,0.95)"
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

export const theme = createTheme({
  themeName: "kevin-portfolio-theme-light",
  spacing: 4,
  palette: {
    portfolio,
    primary: {
      light: portfolio.pink,
      main: portfolio.pink,
      dark: portfolio.pink,
      contrastText: portfolio.dark
    },
    text: {
      primary: portfolio.dark
    }
  },
  typography: {
    ...scaffolding.typography,
    ...typography,
    fontFamily: "Open Sans, sans-serif"
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: portfolio.dark
        },
        gutterBottom: {
          marginBottom: scaffolding.spacing(8)
        }
      }
    }
  }
});
