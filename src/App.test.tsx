import React from "react";
import { render } from "@testing-library/react";
import { reducer } from "state/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { App } from "App";

test("renders learn react link", () => {
  const { getByText } = render(<App store={configureStore({ reducer })} />);
  expect(getByText(/learn/i)).toBeInTheDocument();
});
