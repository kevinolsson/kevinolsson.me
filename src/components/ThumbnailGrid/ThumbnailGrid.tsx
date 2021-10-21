import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Thumbnail, IThumbnail } from "../Thumbnail/Thumbnail";

const useStyles = makeStyles(
  theme => ({
    root: {},
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gridGap: `${theme.spacing()}px`,
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)"
      },
      [theme.breakpoints.up("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)"
      }
    },
    gridItem: {
      marginBottom: theme.spacing(18),
      display: "inline-block"
    }
  }),
  { name: "ThumbnailGrid" }
);

interface IThumbnailGrid {
  thumbnails: IThumbnail[];
}

export const ThumbnailGrid = ({ thumbnails }: IThumbnailGrid) => {
  const classes = useStyles();

  return !!thumbnails.length ? (
    <div className={classes.root}>
      <div className={classes.grid}>
        {thumbnails.map(
          ({ type, thumbnail, url, title }: IThumbnail, index) => (
            <div key={index} className={classes.gridItem}>
              <Thumbnail
                title={title}
                type={type}
                thumbnail={thumbnail}
                url={url}
              />
            </div>
          )
        )}
      </div>
    </div>
  ) : null;
};
