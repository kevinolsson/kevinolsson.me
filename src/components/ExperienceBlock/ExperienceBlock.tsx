import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gridGap: theme.spacing(4),
      marginBottom: theme.spacing(8)
    },
    headerWrapper: {
      maxWidth: "90%"
    },
    avatar: {
      width: "48px",
      height: "48px",
      transform: `translateY(${theme.spacing(3)})`,
      [theme.breakpoints.up("md")]: {
        width: "80px",
        height: "80px"
      }
    },
    details: {
      whiteSpace: "pre-line",
      maxWidth: "540px",
      "& li": {
        marginBottom: 0
      }
    }
  }),
  { name: "experienceBlock" }
);

interface IExperienceBlock {
  children: React.ReactNode;
  avatar?: string;
  company: string;
  position: string;
  details?: Array<string>;
}

export const ExperienceBlock = ({
  avatar,
  company,
  position,
  details = [],
  children
}: IExperienceBlock): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar src={avatar} alt={company} className={classes.avatar} />
      <Box className={classes.details}>
        <div className={classes.headerWrapper}>
          <Typography variant="h2">{company}</Typography>
        </div>
        <Typography component="div" variant="body1">
          <Box fontWeight="fontWeightBold" marginBottom={-1}>
            {position}
          </Box>
        </Typography>
        {!!details.length && (
          <Typography variant="body1" paragraph component="div">
            {details.map((detail, index) => (
              <Box key={index} display="block" marginBottom={-1}>
                {detail}
              </Box>
            ))}
          </Typography>
        )}
        {children && (
          <Typography component="div" variant="body1">
            {children}
          </Typography>
        )}
      </Box>
    </div>
  );
};
