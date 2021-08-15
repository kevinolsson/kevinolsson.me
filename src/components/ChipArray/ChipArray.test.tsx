import React from "react";
import { render } from "@testing-library/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../Theme";
import { ChipArray } from "./ChipArray";

describe("ChipArray", () => {
  test("Renders ChipArray", () => {
    const { getByText } = render(
      <MuiThemeProvider theme={theme}>
        <ChipArray label={["Hello World"]} />
      </MuiThemeProvider>
    );
    expect(getByText(/Hello World/i)).toBeInTheDocument();
  });
});
