import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core/';

const useStyles = makeStyles(
  theme => ({
    root: {
      backgroundColor: theme.palette.portfolio.grey,
      color: theme.palette.common.white,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(1, 4),
      marginBottom: theme.spacing(8),
      '&:hover': {
        backgroundColor: theme.palette.portfolio.grey
      }
    }
  }),
  { name: 'Button' }
);

export const Button = props => {
  const classes = useStyles();
  const { children, className, ...otherProps } = props;
  return (
    <MuiButton className={[classes.root, className].join(' ')} {...otherProps}>
      {children}
    </MuiButton>
  );
};

Button.defaultProps = {
  className: undefined
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
