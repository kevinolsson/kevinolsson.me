import React from "react";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      display: "inline-block",
      padding: theme.spacing(0.5),
      margin: theme.spacing(4),
      transition: "0.2s ease-out transform"
    },
    rootActive: {
      transform: "translateY(-2px)"
    },
    bar: {
      display: "block",
      margin: theme.spacing(1, 0),
      backgroundColor: theme.palette.portfolio.dark,
      width: theme.spacing(7),
      height: "3px",
      paddingBottom: "1px",
      transition: "0.2s ease-out all"
    },
    barActiveFirst: {
      backgroundColor: theme.palette.common.white,
      transformOrigin: "center",
      transform: "rotate(45deg) translate(7px, 7px)"
    },
    barActiveSecond: {
      opacity: 0
    },
    barActiveThird: {
      backgroundColor: theme.palette.common.white,
      transformOrigin: "center",
      transform: "rotate(-45deg) translate(4px, -4px);"
    }
  }),
  { name: "hamburgerIcon" }
);

export const HamburgerIcon = ({ active }: { active: boolean }): JSX.Element => {
  const classes = useStyles();
  return (
    <div
      className={[classes.root, active && classes.rootActive]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[classes.bar, active && classes.barActiveFirst]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        className={[classes.bar, active && classes.barActiveSecond]
          .filter(Boolean)
          .join(" ")}
      />
      <div
        className={[classes.bar, active && classes.barActiveThird]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
};
