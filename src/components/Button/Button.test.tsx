import React from "react";
import { render } from "@testing-library/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../Theme";
import { Button } from "./Button";

describe("Button", () => {
  test("Renders Button", () => {
    const { getByText } = render(
      <MuiThemeProvider theme={theme}>
        <Button>Hello World</Button>
      </MuiThemeProvider>
    );
    expect(getByText(/Hello World/i)).toBeInTheDocument();
  });
});
