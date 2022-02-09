import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { ContextAwareNavigation } from "../Navigation/ContextAwareNavigation";
import { ContextAwareTitle } from "../Title/ContextAwareTitle";
import { ITitle } from "../Title/Title";
import { INavigation } from "../Navigation/Navigation";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      display: "grid",
      gridTemplateColumns: "1fr 1px",
      marginBottom: theme.spacing(8),
      [theme.breakpoints.up("md")]: {
        gridGap: theme.spacing(4),
        gridTemplateColumns: "1fr auto"
      }
    },
    navigation: {
      minWidth: "124px",
      position: "relative",
      left: "-100px",
      [theme.breakpoints.up("md")]: {
        position: "unset",
        left: 0
      }
    }
  }),
  { name: "header" }
);

interface IHeader {
  ContextAwareTitleProps?: ITitle;
  ContextAwareNavigationProps?: INavigation;
}

export const Header = ({
  ContextAwareTitleProps,
  ContextAwareNavigationProps
}: IHeader): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContextAwareTitle {...ContextAwareTitleProps} />
      <div className={classes.navigation}>
        <ContextAwareNavigation
          view="desktop"
          {...ContextAwareNavigationProps}
        />
      </div>
    </div>
  );
};
