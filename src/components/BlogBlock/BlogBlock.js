import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(
  theme => ({
    root: {
      marginBottom: theme.spacing(8),
      textDecoration: 'none',
      maxWidth: '540px',
      display: 'inline-block'
    }
  }),
  { name: 'BlogBlock' }
);

export const BlogBlock = ({ title, date, body, url, featured }) => {
  const classes = useStyles();
  return (
    <Link to={url} className={classes.root}>
      {title && (
        <Typography
          paragraph
          color={featured ? 'primary' : 'textPrimary'}
          variant="h2"
        >
          {title}
        </Typography>
      )}
      {date && (
        <Typography paragraph variant="body1">
          <strong>{date}</strong>
        </Typography>
      )}
      {body && <Typography variant="body1">{body}</Typography>}
    </Link>
  );
};

BlogBlock.defaultProps = {
  featured: false,
  title: undefined,
  date: undefined,
  body: undefined
};

BlogBlock.propTypes = {
  featured: PropTypes.bool,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string
};
