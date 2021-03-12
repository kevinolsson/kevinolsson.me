import React from "react";
import { Router } from "Router";
import { ContextProvider } from "components/Context/Context";

export const App = () => {
  const [lightTheme, setLightTheme] = React.useState<boolean>(true);

  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light");
  React.useEffect(() => {
    setLightTheme(prefersLightTheme.matches);
  }, [prefersLightTheme]);

  let root = document.documentElement;
  root.style.setProperty(
    "--component-html-background-color",
    lightTheme ? "var(--palette-white)" : "var(--palette-dark-bg)"
  );

  return (
    <ContextProvider
      value={{
        theme: {
          lightTheme,
          setLightTheme: (newValue: boolean) => {
            setLightTheme(newValue);
          }
        }
      }}
    >
      <Router />
    </ContextProvider>
  );
};
