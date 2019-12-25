import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    maxWidth: '1024px',
    margin: '0 auto',
    padding: (settings) => settings.theme.spacing(4),
  },
}, { name: 'layout' });

const Layout = (props) => {
  const theme = useTheme();
  const classes = useStyles({ props, theme });
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
