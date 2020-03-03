import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

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

export const Thumbnail = ({ thumbnail: thumbnailProp, url }) => {
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
  const Component = url ? Link : Box;

  if (error) return (<div>You suck</div>);
  return hasLoaded ? (
    <Component className={classes.root} to={url} />
  ) : <div>Hello World</div>;
};

Thumbnail.defaultProps = {
  url: undefined,
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Thumbnail;
