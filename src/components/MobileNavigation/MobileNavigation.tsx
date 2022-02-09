import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { ContextAwareNavigation } from "../Navigation/ContextAwareNavigation";
import { ContextAwareHamburgerButton } from "../HamburgerButton/ContextAwareHamburgerButton";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 100,
      opacity: 0,
      pointerEvents: "none",
      transition: "0.1s ease-out all",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    forceMobileView: {
      [theme.breakpoints.up("md")]: {
        display: "block"
      }
    },
    rootVisible: {
      opacity: 1,
      pointerEvents: "auto"
    },
    background: {
      backgroundColor: theme.palette.menuBackgroundColor,
      height: "100%",
      width: "100%"
    },
    mobileNavigation: {
      position: "absolute",
      right: theme.spacing(4),
      bottom: theme.spacing(24)
    }
  }),
  { name: "mobileNavigation" }
);

interface IMobileNavigation {
  forceMobileView?: boolean;
}

export const MobileNavigation = ({
  forceMobileView
}: IMobileNavigation): JSX.Element => {
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <React.Fragment>
      <div
        className={[
          classes.root,
          visible && classes.rootVisible,
          forceMobileView && classes.forceMobileView
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div onClick={toggleVisible} className={classes.background}>
          <div className={classes.mobileNavigation}>
            <ContextAwareNavigation
              handleClickCallback={toggleVisible}
              view="mobile"
            />
          </div>
        </div>
      </div>
      <ContextAwareHamburgerButton
        active={visible}
        handleClickCallback={toggleVisible}
        forceMobileView={forceMobileView}
      />
    </React.Fragment>
  );
};
