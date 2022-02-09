import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { lightTheme as theme } from "theme/Theme";
import { Provider } from "react-redux";
import { store } from "index";
import { BrowserRouter } from "react-router-dom";

console.log({ theme });

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </Provider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
