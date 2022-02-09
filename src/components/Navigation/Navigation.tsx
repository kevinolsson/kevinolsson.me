import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      padding: 0,
      listStyle: "none"
    },
    navItem: ({ view }: any) => ({
      textAlign: view === "desktop" ? "left" : "right",
      marginRight: view === "desktop" && theme.spacing(4),
      paddingTop: view === "mobile" && theme.spacing(2),
      paddingBottom: view === "mobile" && theme.spacing(2)
    }),
    navItemLast: {
      marginRight: 0
    },
    navItemMobile: ({ view }: any) => ({
      display: view === "desktop" ? "none" : "block",
      [theme.breakpoints.up("md")]: {
        display: "inline-block"
      }
    }),
    navItemDesktop: ({ view }: any) => ({
      display: view === "desktop" ? "inline-block" : "none",
      [theme.breakpoints.up("md")]: {
        display: "inline-block"
      }
    }),
    link: ({ view }: any) => ({
      ...(view === "mobile" ? theme.typography.h2 : undefined),
      fontFamily: theme.typography.fontFamily,
      fontWeight: 700,
      color: theme.palette.portfolio.dark,
      textDecoration: "none"
    }),
    linkActive: () => ({
      color: theme.palette.portfolio.green
    }),
    icon: {
      position: "relative",
      top: theme.spacing(1.5)
    }
  }),
  { name: "navigation" }
);

export type EnumView = "desktop" | "mobile";
export interface INavigation {
  active?: string;
  menu?: Array<{
    external: boolean;
    name: string | any;
    url: string;
  }>;
  view?: EnumView;
  handleClickCallback?: () => void;
}

export const Navigation = ({
  active,
  menu,
  view,
  handleClickCallback
}: INavigation): JSX.Element | false | undefined => {
  const classes = useStyles({ view });
  // eslint-disable-next-line no-console
  console.log({ active, menu });
  return (
    menu &&
    !!menu.length && (
      <ul className={classes.root}>
        {menu.map((nav, index) => {
          const Component = nav.external
            ? (MuiLink as React.ElementType)
            : (Link as React.ElementType);
          return (
            <li
              key={index}
              className={[
                classes.navItem,
                menu.length - 1 === index && classes.navItemLast,
                nav.external ? classes.navItemDesktop : classes.navItemMobile
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Typography
                component="div"
                variant="body1"
                onClick={
                  handleClickCallback
                    ? () => {
                        handleClickCallback();
                      }
                    : undefined
                }
              >
                <Component
                  to={!nav.external ? nav.url : undefined}
                  href={nav.external ? nav.url : undefined}
                  target={nav.external ? "_blank" : undefined}
                  className={[
                    classes.link,
                    active === nav.url && classes.linkActive,
                    typeof nav.name === "object" && classes.icon
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {nav.name}
                </Component>
              </Typography>
            </li>
          );
        })}
      </ul>
    )
  );
};
