import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      boxSizing: "border-box",
      maxWidth: "640px",
      margin: `${theme.spacing(4)}px auto`,
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(24),
      transition: "0.2s ease-out all",
      [theme.breakpoints.up("md")]: {
        maxWidth: "1024px"
      }
    }
  }),
  { name: "layout" }
);

export const Layout = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
