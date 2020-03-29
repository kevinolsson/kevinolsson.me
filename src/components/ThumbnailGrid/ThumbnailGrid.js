import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: `${theme.spacing()}px`,
    gridAutoRows: theme.spacing(75),
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: theme.spacing(60),
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: theme.spacing(75),
    },
  },
  gridItem: {
    backgroundColor: theme.palette.portfolio.grey,
    display: 'inline-block',
  },

}), { name: 'ThumbnailGrid' });

export const ThumbnailGrid = ({ thumbnails }) => {
  const classes = useStyles();
  
  return !!thumbnails.length && (
    <div className={classes.root}>
      <div className={classes.grid}>
        { thumbnails.map(({ type, thumbnail, url }, index) => (
            <Thumbnail key={index} type={type} thumbnail={thumbnail} url={url} />
          )
        )}
      </div>
    </div>
  );
};

ThumbnailGrid.defaultProps = {
  thumbnails: [],
};

ThumbnailGrid.propTypes = {
  thumbnails: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['component', 'external', 'standard']),
      thumbnail: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ),
};

