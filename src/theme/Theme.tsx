import { createTheme } from "@mui/material/styles";
import { baseTheme as scaffolding } from "./Base";
import { typography } from "./Typography";
import { globalPalette, lightPalette, darkPalette } from "./Palettes";

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
    borderColor: ColorType;
    buttonBackgroundColor: ColorType;
    buttonTextColor: ColorType;
    placeholderBackgroundColor: ColorType;
    backgroundColor: ColorType;
    menuBackgroundColor: ColorType;
    menuActiveLinkColor: ColorType;
    iconColor: ColorType;
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

export const lightTheme = createTheme({
  themeName: "kevin-portfolio-theme-light",
  spacing: 4,
  palette: {
    global: globalPalette,
    portfolio, // the old way of accessing styles
    primary: {
      light: globalPalette.pink.dark,
      main: globalPalette.pink.dark,
      dark: globalPalette.pink.dark,
      contrastText: globalPalette.grey[900]
    },
    text: {
      primary: globalPalette.grey[900]
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
          color: globalPalette.grey[900]
        },
        gutterBottom: {
          marginBottom: scaffolding.spacing(8)
        }
      }
    }
  }
});

export const darkTheme = createTheme({
  themeName: "kevin-portfolio-theme-dark",
  spacing: 4,
  palette: {
    global: globalPalette,
    portfolio, // the old way of accessing styles
    primary: {
      light: globalPalette.pink.light,
      main: globalPalette.pink.light,
      dark: globalPalette.pink.light,
      contrastText: globalPalette.grey[100]
    },
    text: {
      primary: globalPalette.grey[100]
    },
    ...darkPalette
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
          color: globalPalette.grey[100]
        },
        gutterBottom: {
          marginBottom: scaffolding.spacing(8)
        }
      }
    }
  }
});
