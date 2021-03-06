import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from 'components/HamburgerIcon/HamburgerIcon';

const useStyles = makeStyles(
  theme => ({
    root: ({ forceMobileView }) => ({
      position: 'fixed',
      zIndex: 150,
      bottom: theme.spacing(4),
      right: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        display: !forceMobileView && 'none'
      }
    }),
    button: {
      width: theme.spacing(16),
      height: theme.spacing(16),
      border: 'none',
      outline: 'none',
      borderRadius: '100%',
      backgroundColor: theme.palette.portfolio.green,
      position: 'relative',
      zIndex: 10,
      padding: 0
    },
    buttonActive: {
      backgroundColor: theme.palette.portfolio.grey
    },
    buttonBack: {
      position: 'absolute',
      transition: '0.1s ease-out all',
      width: theme.spacing(12),
      height: theme.spacing(12),
      backgroundColor: theme.palette.portfolio.grey,
      top: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: 5
    },
    buttonBackActive: {
      right: theme.spacing(18)
    },
    buttonTopActive: {
      top: -theme.spacing(14)
    },
    backIcon: {
      margin: theme.spacing(3),
      fill: theme.palette.common.white,
      transition: 'transform 0.2s ease-out'
    },
    topIcon: {
      transform: 'rotate(90deg)'
    }
  }),
  { name: 'hamburgerButton' }
);

export const HamburgerButton = ({
  handleClickCallback,
  active,
  forceMobileView,
  back,
  showBack
}) => {
  const [backActive, setBackActive] = React.useState(false);
  const classes = useStyles({ forceMobileView });

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
        className={[classes.button, active && classes.buttonActive]
          .filter(Boolean)
          .join(' ')}
      >
        <HamburgerIcon active={active} />
      </button>
      {back && (
        <Component
          to={typeof back === 'string' ? back : undefined}
          onClick={
            typeof back === 'function'
              ? () => {
                  back();
                }
              : undefined
          }
          className={[
            classes.button,
            classes.buttonBack,
            backActive &&
              typeof back !== 'function' &&
              classes.buttonBackActive,
            backActive && typeof back === 'function' && classes.buttonTopActive
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <ArrowBackIcon
            className={[
              classes.backIcon,
              typeof back === 'function' && classes.topIcon
            ]
              .filter(Boolean)
              .join(' ')}
          />
        </Component>
      )}
    </div>
  );
};

HamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined,
  back: undefined,
  showBack: false,
  forceMobileView: false
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func,
  back: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  showBack: PropTypes.bool,
  forceMobileView: PropTypes.bool
};
