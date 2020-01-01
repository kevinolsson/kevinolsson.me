/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Link as MuiLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    listStyle: 'none',
  },
  navItem: ({ view }) => ({
    textAlign: view === 'desktop' ? 'left' : 'right',
    marginRight: view === 'desktop' && theme.spacing(4),
    paddingTop: view === 'mobile' && theme.spacing(2),
    paddingBottom: view === 'mobile' && theme.spacing(2),
  }),
  navItemLast: ({ view }) => ({
    marginRight: 0,
  }),
  navItemMobile: ({ view }) => ({
    display: view === 'desktop' ? 'none' : 'block',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
  }),
  navItemDesktop: ({ view }) => ({
    display: view === 'desktop' ? 'inline-block' : 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
  }),
  link: ({ view }) => ({
    ...view === 'mobile' ? theme.typography.h2 : undefined,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 700,
    color: theme.palette.portfolio.dark,
    textDecoration: 'none',
  }),
  linkActive: ({ view }) => ({
    color: theme.palette.portfolio.green,
  }),
  icon: {
    position: 'relative',
    top: theme.spacing(1.5),
  },
}), { name: 'navigation' });

const Navigation = (props) => {
  const classes = useStyles({ ...props });

  const { active, menu, handleClickCallback } = props;
  return !!menu.length && (
    <ul className={classes.root}>
      { menu.map((nav, index) => {
        const Component = nav.external ? MuiLink : Link;
        return (
          <li
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={[
              classes.navItem,
              menu.length - 1 === index && classes.navItemLast,
              nav.external ? classes.navItemDesktop : classes.navItemMobile,
            ].filter(Boolean).join(' ')}
          >
            <Typography component="div" variant="body1" onClick={handleClickCallback ? () => { handleClickCallback(); } : undefined}>
              <Component
                to={!nav.external ? nav.url : undefined}
                href={nav.external ? nav.url : undefined}
                className={[
                  classes.link,
                  active === nav.url && classes.linkActive,
                  typeof nav.name === 'object' && classes.icon,
                ].filter(Boolean).join(' ')}
              >
                {nav.name}
              </Component>
            </Typography>
          </li>
        );
      })}
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
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
      url: PropTypes.string,
    }),
  ),
  view: PropTypes.oneOf(['desktop', 'mobile']),
  handleClickCallback: PropTypes.func,
};

export default Navigation;
