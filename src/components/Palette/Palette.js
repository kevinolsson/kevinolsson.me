import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Palette = (props) => {
  const { value, palette, group } = props;
  return (
    <Box width={1} bgcolor={palette} display="table" height="100px">
      <Box
        display="table-cell"
        paddingLeft={4}
        style={{ verticalAlign: 'middle' }}
      >
        <Typography variant="body1" component="div">
          <Box
            style={{ textTransform: 'uppercase' }}
            fontWeight="fontWeightBold"
            fontSize="body1.fontSize"
          >
            {palette}
          </Box>
          {/^\d+$/.test(value)
            ? `theme.palette.${group}[${value}]`
            : `theme.palette.${group}.${value}`}
        </Typography>
      </Box>
    </Box>
  );
};

Palette.propTypes = {
  group: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  palette: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Palette;
