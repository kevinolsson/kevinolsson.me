import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      display: "grid",
      gridTemplateColumns: "auto",
      gridGap: theme.spacing(4),
      maxWidth: "560px",
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "auto 1fr"
      },
      textDecoration: "none"
    }
  }),
  { name: "titleWrapper" }
);

interface ITitleWrapper {
  url?: string;
  children: React.ReactNode;
}

export const TitleWrapper = ({ url, children }: ITitleWrapper) => {
  const classes = useStyles();
  return url ? (
    <Link to={url} className={classes.root}>
      {children}
    </Link>
  ) : (
    <div className={classes.root}>{children}</div>
  );
};