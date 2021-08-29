import React from "react";
import { mdxMapping } from "./mdxMapping";
import { makeStyles } from "@material-ui/core/styles";

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

export const MDX = ({ file }: { file: String }): any => {
  const classes = useStyles();

  const mdx = mdxMapping.find(mdx => mdx.file === file);

  if (!mdx) return null;

  const Component = mdx.component;
  return (
    <div className={classes.root}>
      <Component />
    </div>
  );
};
