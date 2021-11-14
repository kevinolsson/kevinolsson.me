import React from "react";
import { data } from "mdx/";
import makeStyles from "@mui/styles/makeStyles";
import { EnumFilename } from "mdx/index";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      color: theme.palette.portfolio.dark,
      "& a": { color: theme.palette.portfolio.pink },
      "& h1": { ...theme.typography.h4 },
      "& h2": { ...theme.typography.h5 },
      "& h3": { ...theme.typography.h5 },
      "& h4": { ...theme.typography.h6 },
      "& h5": { ...theme.typography.h6 },
      "& h1, & h2, & h3, & h4, & h5": {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(4)
      },
      "& p": { ...theme.typography.body1, maxWidth: "65ch" },
      "& img": {
        width: "100%",
        maxWidth: "640px",
        [theme.breakpoints.up("md")]: {
          maxWidth: "1024px"
        }
      }
    }
  }),
  { name: "layout" }
);

interface IMDX {
  filename: EnumFilename;
}

export const MDX = ({ filename }: IMDX): JSX.Element | null => {
  const classes = useStyles();
  const mdx = data.find(mdx => mdx.filename === filename);

  if (!mdx) return null;

  const Component = mdx.component;
  return (
    <div className={classes.root}>
      <Component />
    </div>
  );
};
