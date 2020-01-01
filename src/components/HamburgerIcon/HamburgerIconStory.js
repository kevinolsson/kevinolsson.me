import React from 'react';
import Box from '@material-ui/core/Box';
import HamburgerIcon from './HamburgerIcon';

const HamburgerIconStory = () => {
  const [active, setActive] = React.useState(false);
  return (
    <Box borderRadius="100%" width={64} height={64} display="inline-block" bgcolor={active ? 'portfolio.grey' : 'portfolio.green'} onClick={() => { setActive(!active); }}>
      <HamburgerIcon active={active} />
    </Box>
  );
};

export default HamburgerIconStory;
