import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      position: "relative",
      left: theme.spacing(-4),
      right: theme.spacing(-4),
      width: `calc(100% + ${theme.spacing(8)})`
    }
  }),
  { name: "IgnoreLayoutWrapper" }
);

interface IIgnoreLayoutWrapper {
  children: React.ReactNode;
}

export const IgnoreLayoutWrapper = ({
  children
}: IIgnoreLayoutWrapper): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
