import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box, Link as MuiLink } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: 'block',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[200],
      height: '100%',
      backgroundSize: 'cover',
      backgroundImage: ({ src }) => `url(${src})`,
    },
  }),
  { name: 'Thumbnail' },
);

const Thumbnail = ({ type, thumbnail: thumbnailProp, url }) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const thumbnail = new Image();
  thumbnail.addEventListener('load', () => {
    setHasLoaded(true);
  }, false);
  thumbnail.addEventListener('error', () => {
    setError(true);
  });
  thumbnail.src = thumbnailProp;

  const classes = useStyles({ src: thumbnailProp });
  // eslint-disable-next-line no-nested-ternary
  const Component = type === 'external' ? MuiLink : url ? Link : Box;

  return hasLoaded && !error ? (
    <Component className={classes.root} to={url} href={type === 'external' ? url : undefined} />
  ) : <Skeleton variant="rect" height="100%" />;
};

Thumbnail.defaultProps = {
  type: 'default',
  url: undefined,
};

Thumbnail.propTypes = {
  type: PropTypes.oneOf(['component', 'external', 'default']),
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Thumbnail;
