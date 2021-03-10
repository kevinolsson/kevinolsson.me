import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box, Link as MuiLink, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles(
  theme => ({
    wrapper: {
      textDecoration: 'none',
      color: theme.palette.portfolio.dark,
      '&:hover': {
        textDecoration: 'none'
      }
    },
    thumbnail: {
      display: 'block',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[200],
      backgroundSize: 'cover',
      backgroundImage: ({ src }) => `url(${src})`,
      backgroundPosition: 'top',
      paddingTop: theme.spacing(60),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(75)
      }
    },
    text: {
      marginBottom: theme.spacing(4)
    },
    externalIcon: {
      marginRight: theme.spacing(),
      transform: 'translateY(6px)'
    }
  }),
  { name: 'Thumbnail' }
);

export const Thumbnail = ({ type, thumbnail: thumbnailProp, url, title }) => {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  const thumbnail = new Image();
  thumbnail.addEventListener(
    'load',
    () => {
      setHasLoaded(true);
    },
    false
  );
  thumbnail.addEventListener('error', () => {
    setError(true);
  });
  thumbnail.src = thumbnailProp;

  const classes = useStyles({ src: thumbnailProp });
  // eslint-disable-next-line no-nested-ternary
  const Component = type === 'external' ? MuiLink : url ? Link : Box;

  return hasLoaded && !error ? (
    <div>
      <Component
        className={classes.wrapper}
        to={url}
        href={type === 'external' ? url : undefined}
        target={type === 'external' ? '_blank' : undefined}
      >
        <div className={classes.thumbnail} />
        <Typography className={classes.text} component="div">
          <Box marginBottom={-1} fontWeight="fontWeightBold">
            {title}
          </Box>
          {type === 'external' && (
            <Typography variant="body2">
              <LinkIcon className={classes.externalIcon} /> Opens in a new tab
            </Typography>
          )}
        </Typography>
      </Component>
    </div>
  ) : (
    <Skeleton variant="rect" height="100%" />
  );
};

Thumbnail.defaultProps = {
  type: 'default',
  url: undefined
};

Thumbnail.propTypes = {
  type: PropTypes.oneOf(['component', 'external', 'standard']),
  thumbnail: PropTypes.string.isRequired,
  url: PropTypes.string,
  title: PropTypes.string
};
