import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: `${theme.spacing()}px`,
  },
  gridItem: {
    backgroundColor: theme.palette.portfolio.grey,
    display: 'inline-block',
    paddingBottom: '100%',
  },

}), { name: 'ThumbnailGrid' });

const ThumbnailGrid = ({ playground }) => {
  const classes = useStyles();
  return !!playground.length && (
    <div className={classes.root}>
      <div className={classes.grid}>
        { playground.map(({ to, src, name }) => (
          <Link to={to} className={classes.gridItem}>
            <img src={src} alt={name} />
            <span>{name}</span>
          </Link>
        )) }
      </div>
    </div>
  );
};

ThumbnailGrid.defaultProps = {
  playground: [],
};

ThumbnailGrid.propTypes = {
  playground: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      src: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default ThumbnailGrid;
