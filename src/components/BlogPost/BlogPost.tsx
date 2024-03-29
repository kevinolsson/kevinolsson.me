import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useLocation, Link } from "react-router-dom";
import { data } from "mdx/index";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Typography } from "@mui/material";
import { Button } from "../Button/Button";
import { Meta } from "../Meta/Meta";
import { MDX } from "../MDX/MDX";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {},
    backButton: {
      marginBottom: theme.spacing(8)
    },
    subtitle: {
      marginBottom: theme.spacing(12)
    }
  }),
  { name: "BlogPost" }
);

interface IBlogPost {
  slug?: string;
}

export const BlogPost = ({ slug: slugOverride }: IBlogPost): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const slug = slugOverride || location.pathname.split("/")[2];
  const post = data.find(d => d.url === slug);

  return post ? (
    <div className={classes.root}>
      <Meta
        title={post.title}
        description={post.subtitle}
        thumbnail={post.thumbnail}
      />
      {!slugOverride && (
        <div className={classes.backButton}>
          <Button component={Link} to="/" startIcon={<ArrowBackIcon />}>
            Back to blog
          </Button>
        </div>
      )}
      {post.title && <Typography variant="h1">{post.title}</Typography>}
      <div className={classes.subtitle}>
        {post.date && (
          <Typography paragraph variant="body1">
            <strong>{post.date}</strong>
          </Typography>
        )}
        {post.subtitle && (
          <Typography gutterBottom component="h2" variant="h5">
            {post.subtitle}
          </Typography>
        )}
      </div>
      {post.filename && (
        <div>
          <MDX filename={post.filename} />
        </div>
      )}
    </div>
  ) : (
    <ErrorMessage code={404} />
  );
};
