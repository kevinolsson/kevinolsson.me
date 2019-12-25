import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Palette from './Palette';

const PaletteGroup = (props) => {
  const { value, palette } = props;
  return (
    <>
      <Typography style={{ textTransform: 'capitalize' }} variant="h5">
        {value}
      </Typography>
      <Box marginTop={2} marginBottom={6}>
        {Object.keys(palette).map((subValue, index) => {
          if (palette[subValue]) {
            return (
              <Palette
                // eslint-disable-next-line react/no-array-index-key
                key={`palette-${index}`}
                value={subValue}
                group={value}
                palette={palette[subValue]}
              />
            );
          }
          return false;
        })}
      </Box>
    </>
  );
};

PaletteGroup.propTypes = {
  value: PropTypes.string.isRequired,
  palette: PropTypes.shape({
    hex: PropTypes.string,
  }).isRequired,
};

export default PaletteGroup;
