import React from "react";
import Typography from "@mui/material/Typography";
import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      marginBottom: theme.spacing(12),
      textDecoration: "none",
      maxWidth: "540px",
      display: "block"
    }
  }),
  { name: "BlogBlock" }
);

interface IBlogBlock {
  title?: string;
  date?: string;
  body?: string;
  url: string;
  featured?: boolean;
}

export const BlogBlock = ({
  title,
  date,
  body,
  url,
  featured
}: IBlogBlock): JSX.Element => {
  const classes = useStyles();
  return (
    <Link to={url} className={classes.root}>
      {title && (
        <Typography
          component="h2"
          color={featured ? "primary" : "textPrimary"}
          variant="h2"
        >
          {title}
        </Typography>
      )}
      {date && (
        <Typography paragraph variant="body1">
          <strong>{date}</strong>
        </Typography>
      )}
      {body && <Typography variant="body1">{body}</Typography>}
    </Link>
  );
};
