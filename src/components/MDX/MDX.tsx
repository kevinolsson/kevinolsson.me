import React from "react";
import { data } from "mdx/";
import { makeStyles } from "@material-ui/core/styles";
import { EnumFilename } from "mdx/index";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      "& h1": { ...theme.typography.h1 },
      "& h2": { ...theme.typography.h2 },
      "& h3": { ...theme.typography.h3 },
      "& h4": { ...theme.typography.h4 },
      "& h5": { ...theme.typography.h5 },
      "& p": { ...theme.typography.body1 }
    }
  }),
  { name: "layout" }
);

interface IMDX {
  filename: EnumFilename;
}

export const MDX = ({ filename }: IMDX) => {
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
