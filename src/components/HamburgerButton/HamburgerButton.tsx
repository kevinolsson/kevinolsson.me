import React from "react";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "./HamburgerIcon";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      position: "fixed",
      zIndex: 150,
      bottom: theme.spacing(4),
      right: theme.spacing(4),
      display: "block",
      [theme.breakpoints.up("md")]: {
        display: "none"
      }
    },
    forceMobileView: {
      [theme.breakpoints.up("md")]: {
        display: "block"
      }
    },
    button: {
      width: theme.spacing(16),
      height: theme.spacing(16),
      border: "none",
      outline: "none",
      borderRadius: "100%",
      backgroundColor: theme.palette.portfolio.green,
      position: "relative",
      zIndex: 10,
      padding: 0
    },
    buttonActive: {
      backgroundColor: theme.palette.portfolio.altGrey
    },
    buttonBack: {
      position: "absolute",
      transition: "0.1s ease-out all",
      width: theme.spacing(12),
      height: theme.spacing(12),
      backgroundColor: theme.palette.portfolio.altGrey,
      top: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 5
    },
    buttonBackActive: {
      right: theme.spacing(18)
    },
    buttonTopActive: {
      top: -theme.spacing(14)
    },
    backIcon: {
      margin: theme.spacing(3),
      fill: theme.palette.common.white,
      transition: "transform 0.2s ease-out"
    },
    topIcon: {
      transform: "rotate(90deg)"
    }
  }),
  { name: "hamburgerButton" }
);

interface IHamburgerButton {
  active: boolean;
  handleClickCallback: () => void;
  back: string | (() => void);
  showBack: boolean | (() => boolean);
  forceMobileView?: boolean;
}

export const HamburgerButton = ({
  handleClickCallback,
  active,
  forceMobileView,
  back,
  showBack
}: IHamburgerButton) => {
  const [backActive, setBackActive] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    if (handleClickCallback) {
      handleClickCallback();
    }
  };

  const Component = typeof back === "string" ? Link : Box;

  React.useEffect(() => {
    setBackActive(!!back && showBack);
  }, [back, showBack]);

  return (
    <div
      className={[
        classes.root,
        forceMobileView ? classes.forceMobileView : undefined
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        onClick={handleClick}
        className={[classes.button, active && classes.buttonActive]
          .filter(Boolean)
          .join(" ")}
      >
        <HamburgerIcon active={active} />
      </button>
      {back && (
        <Component
          to={typeof back === "string" ? back : ""}
          onClick={
            typeof back === "function"
              ? () => {
                  back();
                }
              : undefined
          }
          className={[
            classes.button,
            classes.buttonBack,
            backActive &&
              typeof back !== "function" &&
              classes.buttonBackActive,
            backActive && typeof back === "function" && classes.buttonTopActive
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <ArrowBackIcon
            className={[
              classes.backIcon,
              typeof back === "function" && classes.topIcon
            ]
              .filter(Boolean)
              .join(" ")}
          />
        </Component>
      )}
    </div>
  );
};
