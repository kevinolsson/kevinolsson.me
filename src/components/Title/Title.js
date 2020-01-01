import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridGap: theme.spacing(4),
    maxWidth: '560px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'auto 1fr',
    },
    textDecoration: 'none',
  },
  avatar: {
    marginTop: 0,
    width: '64px',
    height: '64px',
  },
  avatarProminent: {
    marginTop: theme.spacing(2),
    width: '80px',
    height: '80px',
  },
  title: {
    ...theme.typography.h2,
    fontFamily: theme.typography.fontFamily,
  },
  titleProminent: {
    ...theme.typography.h1,
    fontFamily: theme.typography.fontFamily,
  },
  subtitle: {
    display: 'block',
    paddingRight: theme.spacing(12),
    whiteSpace: 'pre-line',
  },
  transition: {
    transition: '0.1s ease-out all',
  },
}), { name: 'title' });


const Title = (props) => {
  const theme = useTheme();
  const classes = useStyles({ props, theme });
  const {
    prominent, avatar, name, introduction, url,
  } = props;
  const Component = url ? Link : Box;
  return (
    <Component to={url} className={classes.root}>
      <Avatar
        src={avatar}
        alt={name}
        className={[
          classes.avatar,
          classes.transition,
          prominent && classes.avatarProminent,
        ].filter(Boolean).join(' ')}
      />
      <Box>
        <Typography
          className={[
            classes.title,
            classes.transtition,
            prominent && classes.titleProminent,
          ].filter(Boolean).join(' ')}
          component={prominent ? 'h1' : 'h2'}
        >
          {name}
        </Typography>
        { prominent && (
        <Typography
          className={classes.subtitle}
          variant="body1"
        >
          {introduction}
        </Typography>
        )}
      </Box>
    </Component>
  );
};

Title.defaultProps = {
  prominent: false,
  avatar: `${process.env.PUBLIC_URL}/images/profile.jpg`,
  name: 'Kevin Olsson',
  introduction: 'Front-end developer & UX Designer.\n I finally built a blog.',
  url: '/',
};

Title.propTypes = {
  prominent: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  introduction: PropTypes.string,
  url: PropTypes.string,
};

export default Title;
