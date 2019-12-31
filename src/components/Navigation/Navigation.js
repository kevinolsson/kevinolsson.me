import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    listStyle: 'none',
    display: ({ view }) => (view === 'mobile' ? 'block' : 'none'),
    [theme.breakpoints.up('md')]: {
      display: ({ view }) => (view === 'desktop' ? 'block' : 'none'),
    },
  },
  navItem: ({ view }) => ({
    display: view === 'desktop' ? 'inline-block' : 'block',
    textAlign: view === 'desktop' ? 'left' : 'right',
    '&:not(:last-of-type)': {
      marginRight: view === 'desktop' && theme.spacing(4),
      paddingTop: view === 'mobile' && theme.spacing(2),
      paddingBottom: view === 'mobile' && theme.spacing(2),
    },
  }),
  link: ({ view }) => ({
    ...view === 'mobile' ? theme.typography.h2 : undefined,
    fontWeight: 700,
    color: theme.palette.portfolio.dark,
    textDecoration: 'none',
  }),
  // eslint-disable-next-line no-unused-vars
  linkActive: ({ view }) => ({
    color: theme.palette.portfolio.green,
  }),
}), { name: 'navigation' });

const Navigation = (props) => {
  const classes = useStyles({ ...props });

  const { active, menu, handleClickCallback } = props;
  return !!menu.length && (
    <ul className={classes.root}>
      { menu.map((nav, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={classes.navItem}>
          <Typography component="div" variant="body1" onClick={handleClickCallback ? () => { handleClickCallback(); } : undefined}>
            { nav.external ? (
              <a className={classes.link} href={nav.url}>{nav.name}</a>
            ) : (
              <Link
                to={nav.url}
                className={[classes.link, active === nav.url && classes.linkActive].filter(Boolean).join(' ')}
              >
                {nav.name}
              </Link>
            ) }

          </Typography>
        </li>
      ))}
    </ul>
  );
};

Navigation.defaultProps = {
  view: 'desktop',
  active: undefined,
  menu: [],
  handleClickCallback: undefined,
};

Navigation.propTypes = {
  active: PropTypes.string,
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      external: PropTypes.bool,
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  view: PropTypes.oneOf(['desktop', 'mobile']),
  handleClickCallback: PropTypes.func,
};

export default Navigation;
