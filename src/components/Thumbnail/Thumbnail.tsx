import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Box, Link as MuiLink, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import LinkIcon from "@material-ui/icons/Link";

const useStyles = makeStyles(
  (theme: any) => ({
    wrapper: {
      textDecoration: "none",
      color: theme.palette.portfolio.dark,
      "&:hover": {
        textDecoration: "none"
      }
    },
    thumbnail: {
      display: "block",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[200],
      backgroundSize: "cover",
      backgroundImage: ({ src }: { src: string }) => `url(${src})`,
      backgroundPosition: "top",
      paddingTop: theme.spacing(60),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("md")]: {
        paddingTop: theme.spacing(75)
      }
    },
    text: {
      marginBottom: theme.spacing(4)
    },
    externalIcon: {
      marginRight: theme.spacing(),
      transform: "translateY(6px)"
    },
    standalone: {
      width: "240px"
    }
  }),
  { name: "Thumbnail" }
);
export interface IThumbnail {
  type?: string;
  thumbnail?: any;
  url?: string;
  title?: string;
  standalone?: boolean;
  [x: string]: any;
}
export const Thumbnail = ({
  type,
  thumbnail: thumbnailProp,
  url,
  title,
  standalone
}: IThumbnail) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const thumbnail = new Image();
  thumbnail.addEventListener(
    "load",
    () => {
      setHasLoaded(true);
    },
    false
  );
  thumbnail.addEventListener("error", () => {
    setError(true);
  });
  thumbnail.src = thumbnailProp;

  const classes = useStyles({ src: thumbnailProp });

  const content = (
    <React.Fragment>
      <div
        className={[classes.thumbnail, standalone && classes.standalone]
          .filter(Boolean)
          .join(" ")}
      />
      <Typography className={classes.text} component="div">
        <Box marginBottom={-1} fontWeight="fontWeightBold">
          {title}
        </Box>
        {type === "external" && (
          <Typography variant="body2">
            <LinkIcon className={classes.externalIcon} /> Opens in a new tab
          </Typography>
        )}
      </Typography>
    </React.Fragment>
  );

  const props = {
    className: classes.wrapper,
    children: content
  };

  if (!hasLoaded || error) {
    return <Skeleton variant="rect" height="100%" />;
  }

  if (type === "external") {
    return <MuiLink {...props} href={url} target="_blank" />;
  }

  if (!!url) {
    return <Link {...props} to={url} />;
  }

  return <Box {...props} />;
};
