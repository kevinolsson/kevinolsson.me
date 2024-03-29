import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      boxSizing: "border-box",
      maxWidth: "640px",
      margin: `${theme.spacing(4)} auto`,
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

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
