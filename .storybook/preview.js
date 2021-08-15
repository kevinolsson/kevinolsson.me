import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "Theme";

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={theme}>
      <Story />
    </MuiThemeProvider>
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