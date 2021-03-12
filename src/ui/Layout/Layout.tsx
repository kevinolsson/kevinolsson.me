import React from "react";
import classes from "./Layout.module.scss";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return <div className={classes.root}>{children}</div>;
};
