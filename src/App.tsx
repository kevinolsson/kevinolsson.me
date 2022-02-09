import React from "react";
import { Router } from "Router";
import { Provider } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "theme/Theme";
import { StyleInit } from "components/StyleInit/StyleInit";

type AppProps = { store: any };
export const App = ({ store }: AppProps): JSX.Element => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div id="app" style={hasMounted ? { opacity: 1 } : undefined}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <StyleInit />
            <Router />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </div>
  );
};
