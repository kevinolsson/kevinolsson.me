import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { theme } from "Theme";
import { Provider } from "react-redux";
import { store } from "index";
import { BrowserRouter } from 'react-router-dom'

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </StyledEngineProvider> 
      </Provider>
    </BrowserRouter>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}