import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(
  theme => ({
    root: {
      position: 'relative',
      left: theme.spacing(-4),
      right: theme.spacing(-4),
      width: `calc(100% + ${theme.spacing(8)}px)`
    }
  }),
  { name: 'IgnoreLayoutWrapper' }
);

export const IgnoreLayoutWrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

IgnoreLayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
