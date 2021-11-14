import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Thumbnail } from "../Thumbnail/Thumbnail";
import { Button } from "../Button/Button";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      width: "100%",
      position: "relative"
    },
    grid: {
      minHeight: "300px",
      transition: "all 0.2s ease-out",
      display: "grid",
      gridGap: theme.spacing(4),
      gridTemplateColumns: "repeat(3, 240px)",
      overflowX: "scroll",
      overflowY: "hidden",
      scrollSnapType: "x mandatory",
      scrollbarWidth: "none",
      scrollPadding: "0 16px",
      "-webkit-overflow-scrolling": "touch",
      "&::-webkit-scrollbar": {
        display: "none"
      },
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(3, 1fr)"
      }
    },
    thumbnailWrapper: {
      scrollSnapAlign: "start"
    },
    thumbnailWrapperFirst: {
      paddingLeft: theme.spacing(4)
    },
    thumbnailWrapperLast: {
      paddingRight: theme.spacing(4)
    },
    showMoreButton: {
      margin: theme.spacing(4),
      marginBottom: 0
    }
  }),
  { name: "ProjectPreview" }
);

export interface IProject {
  title?: string;
  thumbnail?: string;
  type?: string;
  url?: string;
  [x: string]: any;
}

interface IProjectPreview {
  projects: IProject[];
}

export const ProjectPreview = ({ projects }: IProjectPreview): JSX.Element => {
  const classes = useStyles();
  const showMore = projects.length > 3;
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {projects.slice(0, 3).map(({ thumbnail, type, url, title }, index) => (
          <div
            key={index}
            className={[
              classes.thumbnailWrapper,
              index === 0 ? classes.thumbnailWrapperFirst : undefined,
              (projects.length > 3 && index + 1 === 3) ||
              (projects.length <= 3 && index + 1 === projects.length)
                ? classes.thumbnailWrapperLast
                : undefined
            ].join(" ")}
          >
            <Thumbnail
              key={index}
              title={title}
              type={type}
              thumbnail={thumbnail}
              url={url + "?homepage=true"}
            />
          </div>
        ))}
      </div>
      {showMore && (
        <Button
          component={Link}
          to="/projects"
          endIcon={<ArrowForwardIcon />}
          className={classes.showMoreButton}
        >
          See more projects
        </Button>
      )}
    </div>
  );
};
