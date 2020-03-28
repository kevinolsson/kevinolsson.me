import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const contextAwareHamburgerButton = (Component) => ({ active, handleClickCallback }) => {
  const hasScrolled = useScrollTrigger({
    threshold: 364
  })
  const location = useLocation();
  const pathname = location.pathname.split('/');
  const isNestedPage = !!pathname[2];
  const back = isNestedPage ? `/${pathname[0]}` : () => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth'}) }
  return (
    <Component
      showBack={!active && hasScrolled}
      back={back}
      handleClickCallback={handleClickCallback}
      active={active}
    />
  );
};

contextAwareHamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined,
};

contextAwareHamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func,
}; 