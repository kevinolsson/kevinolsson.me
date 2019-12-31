import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    maxWidth: '1024px',
    margin: `${theme.spacing(4)}px auto`,
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(24),
  },
}), { name: 'layout' });

const Layout = (props) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
