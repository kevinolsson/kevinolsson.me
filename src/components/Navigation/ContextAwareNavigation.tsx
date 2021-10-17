import React from "react";
import { useLocation } from "react-router-dom";
import TwitterIcon from "../Icons/TwitterIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import { Navigation, INavigation } from "./Navigation";
import { useSelector } from "react-redux";

const contextAwareNavigation = (Component: any) => ({
  view = "desktop",
  handleClickCallback
}: INavigation) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const active = `/${pathname[1]}`;
  const { settings } = useSelector((state: { settings: any }) => state);
  const { twitter, linkedIn } = settings.socialMedia;

  const withEdgeCase = a => (a === "/blog" ? "/" : a);

  const menu = [
    { name: "Blog", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: "Resume", url: "/resume" },
    { name: "Contact", url: "/contact" },
    { name: <TwitterIcon />, url: twitter, external: true },
    { name: <LinkedInIcon />, url: linkedIn, external: true }
  ];
  return (
    <Component
      active={withEdgeCase(active)}
      menu={menu}
      view={view}
      handleClickCallback={handleClickCallback}
    />
  );
};

export const ContextAwareNavigation = contextAwareNavigation(Navigation);
