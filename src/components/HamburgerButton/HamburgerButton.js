import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: ({ theme, forceMobileView }) => ({
    position: 'fixed',
    zIndex: 150,
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      display: !forceMobileView && 'none',
    },
  }),
  button: ({ theme }) => ({
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: 'none',
    outline: 'none',
    borderRadius: '100%',
    backgroundColor: theme.palette.portfolio.green,
    position: 'relative',
    zIndex: 10,
  }),
  buttonActive: ({ theme }) => ({
    backgroundColor: theme.palette.portfolio.grey,
  }),
  buttonBack: ({ theme }) => ({
    position: 'absolute',
    transition: '0.1s ease-out right',
    width: theme.spacing(12),
    height: theme.spacing(12),
    backgroundColor: theme.palette.portfolio.grey,
    top: theme.spacing(2),
    right: 0,
    zIndex: 5,
  }),
  buttonBackActive: ({ theme }) => ({
    right: theme.spacing(14),
  }),
}, { name: 'hamburgerButton' });


const HamburgerButton = ({
  handleClickCallback, active, forceMobileView, back, showBack,
}) => {
  const [backActive, setBackActive] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles({ theme, forceMobileView });

  const handleClick = () => {
    if (handleClickCallback) {
      handleClickCallback();
    }
  };

  const Component = typeof back === 'string' ? Link : Box;

  React.useEffect(() => {
    setBackActive(back && showBack);
  }, [back, showBack]);

  return (
    <div className={classes.root}>
      <button
        type="button"
        label="menu"
        onClick={handleClick}
        className={[
          classes.button,
          active && classes.buttonActive,
        ].filter(Boolean).join(' ')}
      />
      { back && (
        <Component
          to={typeof back === 'string' ? back : undefined}
          onClick={typeof back === 'function' ? (() => { back(); }) : undefined}
          className={[
            classes.button,
            classes.buttonBack,
            backActive && classes.buttonBackActive,
          ].filter(Boolean).join(' ')}
        />
      )}
    </div>
  );
};

HamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined,
  back: undefined,
  showBack: false,
  forceMobileView: false,
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func,
  back: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  showBack: PropTypes.bool,
  forceMobileView: PropTypes.bool,
};

export default HamburgerButton;
