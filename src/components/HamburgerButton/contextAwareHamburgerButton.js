import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';


export const contextAwareHamburgerButton = (Component) => ({ active, handleClickCallback }) => {
  // const [hasScrolled, setHasScrolled] = React.useState(false);
  const history = useHistory();
  const back = history.location.key ? history.goBack : '/';
  const pathname = history.location.pathname.split('/');
  const isNestedPage = !!pathname[2];

  // React.useEffect(() => {
  //   window.addEventListener('scroll', () => {  
  //     const { scrollY } = window;
      
  //     if(scrollY > 164 && !hasScrolled ) 
  //       setHasScrolled(true)
      
  //       if(scrollY < 164 && hasScrolled) 
  //       setHasScrolled(false)
  //     })
  // }, [hasScrolled]);

  return (
    <Component
      // showBack={isNestedPage && !active && hasScrolled}
      showBack={isNestedPage && !active}
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