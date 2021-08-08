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

export const theme = createTheme({
  themeName: "kevin-portfolio-theme-light",
  palette: {
    portfolio: {
      pink: "#E556A2",
      green: "#48EC95",
      dark: "#453751",
      altGrey: "#A9A2AF"
    }
  }
});
