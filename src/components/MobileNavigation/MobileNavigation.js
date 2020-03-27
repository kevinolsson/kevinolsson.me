import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Navigation } from 'components/Navigation/Navigation';
import { HamburgerButton } from 'components/HamburgerButton/HamburgerButton.js';
import Box from '@material-ui/core/Box';
import { contextAwareNavigation } from 'components/Navigation/contextAwareNavigation';
import { contextAwareHamburgerButton } from 'components/HamburgerButton/contextAwareHamburgerButton';

const ContextAwareNavigation = contextAwareNavigation(Navigation);
const ContextAwareHamburgerButton = contextAwareHamburgerButton(HamburgerButton);

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100,
    opacity: 0,
    pointerEvents: 'none',
    transition: '0.1s ease-out all',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  rootVisible: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  background: {
    backgroundColor: theme.palette.common.transparentWhite,
    height: '100%',
    width: '100%',
  },
  mobileNavigation: {
    position: 'absolute',
    right: theme.spacing(4),
    bottom: theme.spacing(24),
  },
}), { name: 'mobileNavigation' });


export const MobileNavigation = () => {
  const [visible, setVisible] = React.useState(false);
  const classes = useStyles();

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className={[
        classes.root,
        visible && classes.rootVisible,
      ].filter(Boolean).join(' ')}
      >
        <Box onClick={toggleVisible} className={classes.background}>
          <div className={classes.mobileNavigation}>
            <ContextAwareNavigation handleClickCallback={toggleVisible} view="mobile" />
          </div>
        </Box>
      </div>
      <ContextAwareHamburgerButton active={visible} handleClickCallback={toggleVisible} />
    </>
  );
};
