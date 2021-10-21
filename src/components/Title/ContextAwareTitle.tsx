import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Title, ITitle } from "./Title";
import { ISettings } from "../../data/interfaces";

const contextAwareTitle = (Component: React.ComponentType<any>) => ({
  prominent,
  avatar,
  name,
  introduction,
  url
}: ITitle) => {
  const { settings } = useSelector((state: { settings: ISettings }) => state);
  const { siteTitle, siteDescription, displayPhoto } = settings;
  const location = useLocation();

  return (
    <Component
      prominent={location.pathname === "/" || prominent}
      avatar={displayPhoto || avatar}
      name={siteTitle || name}
      introduction={siteDescription || introduction}
    />
  );
};

export const ContextAwareTitle = contextAwareTitle(Title);
