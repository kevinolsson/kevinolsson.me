import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "components/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
