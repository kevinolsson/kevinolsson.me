import React from "react";
import { useLocation } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { HamburgerButton } from "./HamburgerButton";

const contextAwareHamburgerButton = (Component: React.ComponentType<any>) => ({
  active,
  forceMobileView,
  handleClickCallback
}: {
  active: boolean;
  forceMobileView?: boolean;
  handleClickCallback: () => void;
}) => {
  const hasScrolled = useScrollTrigger({
    threshold: 364
  });

  const pathname = forceMobileView ? "/" : useLocation().pathname.split("/");
  const isNestedPage = !!pathname[2];
  const back = isNestedPage
    ? `/${pathname[0]}`
    : () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };
  return (
    <Component
      showBack={!active && hasScrolled}
      back={back}
      handleClickCallback={handleClickCallback}
      active={active}
      forceMobileView={forceMobileView}
    />
  );
};

export const ContextAwareHamburgerButton = contextAwareHamburgerButton(
  HamburgerButton
);
