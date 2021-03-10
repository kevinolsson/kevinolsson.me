import React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const contextAwareHamburgerButton = Component => ({
  active,
  handleClickCallback
}) => {
  const hasScrolled = useScrollTrigger({
    threshold: 364,
    disableHysteresis: true
  });
  return (
    <Component
      showBack={!active && hasScrolled}
      back={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      handleClickCallback={handleClickCallback}
      active={active}
    />
  );
};

contextAwareHamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined
};

contextAwareHamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func
};
