import React from "react";
import { Router } from "Router";
import { Provider } from "react-redux";

type AppProps = { store: any };
export const App = ({ store }: AppProps) => (
  <Provider store={store}>
    <Router />
  </Provider>
);
