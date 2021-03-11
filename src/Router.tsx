import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { SiteWrapper } from "components/SiteWrapper/SiteWrapper";
import { Home } from "components/Home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <SiteWrapper>
        <Switch>
          <Route component={Home} />
        </Switch>
      </SiteWrapper>
    </BrowserRouter>
  );
};
