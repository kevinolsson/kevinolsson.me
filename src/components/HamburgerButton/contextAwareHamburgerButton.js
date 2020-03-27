import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { watchViewport, unwatchViewport } from 'tornis';

export const contextAwareHamburgerButton = (Component) => ({ active, handleClickCallback }) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const history = useHistory();
  const back = history.location.key ? history.goBack : '/';

  const pathname = history.location.pathname.split('/');
  const isNestedPage = !!pathname[2];

  const handleScroll = ({ scroll }) => {
    if (scroll.changed) {
      setHasScrolled(scroll.top > 164);
    }
  };

  React.useEffect(() => {
    watchViewport(handleScroll);
    return () => {
      unwatchViewport(handleScroll);
    };
  }, []);

  return (
    <Component
      showBack={isNestedPage && !active && hasScrolled}
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