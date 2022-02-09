import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider
} from "@mui/material/styles";
import { lightTheme, darkTheme } from "../../theme/Theme";
import { useSelector } from "react-redux";

export const ThemeProvider = ({
  children
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [theme, setTheme] = React.useState(lightTheme);
  const { activeTheme } = useSelector(
    (state: { activeTheme: string }) => state
  );

  React.useEffect(() => {
    const themes = [lightTheme, darkTheme];
    const newTheme =
      (themes.find((t: any) => t.themeName === activeTheme) as any) ||
      (lightTheme as any);

    document.body.style.backgroundColor = newTheme.palette.backgroundColor;

    setTheme(newTheme);
  }, [activeTheme]);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme || lightTheme}>
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
