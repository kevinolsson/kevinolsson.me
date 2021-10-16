import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "Theme";
import { Provider } from "react-redux";
import { store } from "index";
import { BrowserRouter } from 'react-router-dom'

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Story />
        </MuiThemeProvider>
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