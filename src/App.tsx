import React from "react";
import { Router } from "Router";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "Theme";

type AppProps = { store: any };
export const App = ({ store }: AppProps) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </Provider>
  );
};
