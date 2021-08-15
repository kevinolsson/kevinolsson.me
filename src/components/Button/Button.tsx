import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button as MuiButton } from "@material-ui/core/";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      backgroundColor: theme.palette.portfolio.altGrey,
      color: theme.palette.common.white,
      textTransform: "capitalize",
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(1, 4),
      "&:hover": {
        backgroundColor: theme.palette.portfolio.altGrey
      }
    }
  }),
  { name: "Button" }
);

export const Button: React.FC<{
  children: React.ReactNode;
  [x: string]: any;
}> = ({ children, className, ...otherProps }) => {
  const classes = useStyles();
  return (
    <MuiButton
      className={[classes.root, className ? className : undefined]
        .filter(Boolean)
        .join(" ")}
      {...otherProps}
    >
      {children}
    </MuiButton>
  );
};