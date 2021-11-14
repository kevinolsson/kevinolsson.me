import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { TitleWrapper } from "./TitleWrapper";
import makeStyles from '@mui/styles/makeStyles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(
  (theme: any) => ({
    avatar: {
      marginTop: 0,
      width: "64px",
      height: "64px"
    },
    avatarProminent: {
      marginTop: theme.spacing(2),
      width: "80px",
      height: "80px"
    },
    title: {
      ...theme.typography.h2,
      fontFamily: theme.typography.fontFamily
    },
    titleProminent: {
      ...theme.typography.h1,
      fontFamily: theme.typography.fontFamily
    },
    subtitle: {
      display: "block",
      paddingRight: theme.spacing(12),
      whiteSpace: "pre-line"
    },
    transition: {
      transition: "0.1s ease-out all"
    }
  }),
  { name: "title" }
);

export interface ITitle {
  prominent?: boolean;
  avatar?: string;
  name?: string;
  introduction?: string;
  url?: string;
}

export const Title = ({
  prominent,
  avatar,
  name,
  introduction,
  url
}: ITitle): JSX.Element => {
  const classes = useStyles();

  return (
    <TitleWrapper url={url}>
      <Link to="/">
        <Avatar
          src={avatar}
          alt={name}
          className={[
            classes.avatar,
            classes.transition,
            prominent && classes.avatarProminent
          ]
            .filter(Boolean)
            .join(" ")}
        />
      </Link>
      <div>
        <Typography
          className={[
            classes.title,
            classes.transition,
            prominent && classes.titleProminent
          ]
            .filter(Boolean)
            .join(" ")}
          component={prominent ? "h1" : "h2"}
        >
          {name}
        </Typography>
        {prominent && (
          <Typography className={classes.subtitle} variant="body1">
            {introduction}
          </Typography>
        )}
      </div>
    </TitleWrapper>
  );
};
