import React from "react";
import { Route } from "react-router-dom";

export const GoogleAnalytics = () => {
  return (
    <Route
      path="/"
      render={({ location }) => {
        if (typeof (window as any).ga === "function") {
          (window as any).ga(
            "set",
            "page",
            location.pathname + location.search
          );
          (window as any).ga("send", "pageview");
        }
        return null;
      }}
    />
  );
};
