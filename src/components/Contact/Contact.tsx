import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Meta } from "../Meta/Meta";
import { ISettings } from "../../data/interfaces";

const useStyles = makeStyles(
  (theme?: any) => ({
    bold: {
      color: theme.palette.portfolio.dark,
      fontWeight: theme.typography.fontWeightBold
    }
  }),
  { name: "hamburgerButton" }
);

export const Contact = () => {
  const classes = useStyles();
  const { settings } = useSelector((state: { settings: ISettings }) => state);
  const { twitter, linkedIn } = settings.socialMedia || {};

  return (
    <React.Fragment>
      <Meta title={"Contact"} />
      <Typography gutterBottom variant="h1">
        Say{" "}
        <Link href="mailto:hi@kevinolsson.com" underline="always">
          {" "}
          hej, kamusta!
        </Link>
      </Typography>
      <Box maxWidth={640}>
        <Typography gutterBottom variant="h5">
          You can get in touch with me at{" "}
          <Link className={classes.bold} href="mailto:hi@kevinolsson.com">
            hi@kevinolsson.com
          </Link>
          . You can also reach out to me on social media via{" "}
          <Link className={classes.bold} href={linkedIn}>
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link className={classes.bold} href={twitter}>
            Twitter
          </Link>
          .
        </Typography>
        <Typography variant="body1" paragraph>
          I am currently employed full time at{" "}
          <Link href="https://www.handelsbanken.se/" underline="always">
            Svenska Handelsbanken AB
          </Link>{" "}
          as a Front-end developer. However, don’t let that stop you from
          reaching out! I love building things so I am always open for a chat!
        </Typography>
      </Box>
    </React.Fragment>
  );
};
