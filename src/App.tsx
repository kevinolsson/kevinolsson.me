import React from "react";
import { Router } from "Router";
import { ContextProvider } from "components/Context/Context";

export const App = () => (
  <ContextProvider value={true}>
    <Router />
  </ContextProvider>
);
