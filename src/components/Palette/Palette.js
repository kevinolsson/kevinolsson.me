import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import theme from 'components/Theme';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    color: theme.palette.text.primary,
  },
  palette: {
    textAlign: 'center',
  },
  circle: {
    display: 'block',
    width: '124px',
    height: '124px',
    borderRadius: '100%',
    margin: theme.spacing(4),
  },
  title: {
    textTransform: 'capitalize',
  },
  pink: { backgroundColor: (portfolio) => portfolio.pink },
  green: { backgroundColor: (portfolio) => portfolio.green },
  dark: { backgroundColor: (portfolio) => portfolio.dark },
  grey: { backgroundColor: (portfolio) => portfolio.grey },

}, { name: 'palette' });

const Palette = () => {
  const { portfolio } = theme.palette;
  const classes = useStyles(portfolio);
  return portfolio ? (
    <div className={classes.root}>
      { Object.keys(portfolio).map((palette) => (
        <Box className={classes.palette} key={palette}>
          <Box className={`${classes.circle} ${classes[palette]}`} />
          <Typography className={classes.title} variant="h4">{palette}</Typography>
          <Typography variant="body1">{portfolio[palette]}</Typography>
        </Box>
      )) }
    </div>
  ) : null;
};

export default Palette;
