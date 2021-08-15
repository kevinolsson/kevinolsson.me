import React from "react";
import { render } from "@testing-library/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../../Theme";
import { ExperienceBlock } from "./ExperienceBlock";

describe("ExperienceBlock", () => {
  test("Renders ExperienceBlock", () => {
    const { getByText } = render(
      <MuiThemeProvider theme={theme}>
        <ExperienceBlock company="Hello World AB" position="Mock Position">
          Hello World
        </ExperienceBlock>
      </MuiThemeProvider>
    );
    expect(getByText(/Hello World AB/i)).toBeInTheDocument();
  });
});
