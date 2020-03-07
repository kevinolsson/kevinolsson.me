import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const errorCodes = {
  404: {
    subheader: 'Can\'t seem to find that page!',
    description: 'Either I\'ve messed up really bad or that page never really exists. If you feel something should be here please do reach out!',
  },
};

const ErrorMessage = ({ code }) => (
  <Box maxWidth={640}>
    <Typography color="primary" gutterBottom variant="h1">
      {`Oops! - Error ${code}`}
    </Typography>
    <Typography gutterBottom variant="h5">
      { errorCodes[code].subheader }
    </Typography>
    <Typography>
      { errorCodes[code].description }
    </Typography>
  </Box>
);

ErrorMessage.propTypes = {
  code: PropTypes.number.isRequired,
};

export default ErrorMessage;
