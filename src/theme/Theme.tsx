import { createTheme } from "@mui/material/styles";
import { baseTheme as scaffolding } from "./Base";
import { typography } from "./Typography";
import { globalPalette, lightPalette } from "./Palettes";

declare module "@mui/material/styles/createTheme" {
  interface ThemeOptions {
    themeName?: string;
  }
}

declare module "@mui/material/styles/createPalette" {
  type ColorType = React.CSSProperties["color"];
  interface PaletteOptions {
    global: {
      pink: { [x: string]: ColorType };
      green: { [x: string]: ColorType };
      grey: { [x: number]: ColorType };
    };
    portfolio?: { [x: string]: ColorType };
    primaryColor: ColorType;
    secondaryColor: ColorType;
    textColor: ColorType;
    buttonBackgroundColor: ColorType;
    placeholderBackgroundColor: ColorType;
    menuBackgroundColor: ColorType;
  }
}

declare module "@mui/material/styles/createTypography" {
  type TransitionType = React.CSSProperties["transition"];
  interface TypographyOptions {
    h1: { transition: TransitionType };
    h2: { transition: TransitionType };
    h3: { transition: TransitionType };
    h4: { transition: TransitionType };
    h5: { transition: TransitionType };
    body1: { transition: TransitionType };
    body2: { transition: TransitionType };
  }
}

const portfolio = {
  pink: "#E556A2",
  green: "#48EC95",
  dark: "#453751",
  altGrey: "#A9A2AF",
  transparentWhite: "rgba(255,255,255,0.95)"
};

export const theme = createTheme({
  themeName: "kevin-portfolio-theme-light",
  spacing: 4,
  palette: {
    global: globalPalette,
    portfolio, // the old way of accessing styles
    primary: {
      light: portfolio.pink,
      main: portfolio.pink,
      dark: portfolio.pink,
      contrastText: portfolio.dark
    },
    text: {
      primary: portfolio.dark
    },
    ...lightPalette
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
