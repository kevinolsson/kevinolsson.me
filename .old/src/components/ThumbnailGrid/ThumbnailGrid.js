import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const useStyles = makeStyles(
  theme => ({
    root: {},
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: `${theme.spacing()}px`,
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    },
    gridItem: {
      marginBottom: theme.spacing(18),
      display: 'inline-block'
    }
  }),
  { name: 'ThumbnailGrid' }
);

export const ThumbnailGrid = ({ thumbnails }) => {
  const classes = useStyles();

  return (
    !!thumbnails.length && (
      <div className={classes.root}>
        <div className={classes.grid}>
          {thumbnails.map(({ type, thumbnail, url, title }, index) => (
            <div key={index} className={classes.gridItem}>
              <Thumbnail
                title={title}
                type={type}
                thumbnail={thumbnail}
                url={url}
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

ThumbnailGrid.defaultProps = {
  thumbnails: []
};

ThumbnailGrid.propTypes = {
  thumbnails: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['component', 'external', 'standard']),
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string
    })
  )
};
