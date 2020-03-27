import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  avatar: {
    width: '48px',
    height: '48px',
    transform: `translateY(${theme.spacing(3)}px)`,
    [theme.breakpoints.up('md')]: {
      width: '80px',
      height: '80px',
    },
  },
  details: {
    whiteSpace: 'pre-line',
    maxWidth: '540px',
  },
}), { name: 'experienceBlock' });

export const ExperienceBlock = ({
  avatar, company, position, details, children,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        src={avatar}
        alt={company}
        className={classes.avatar}
      />
      <Box className={classes.details}>
        <Typography variant="h2">{company}</Typography>
        <Typography component="div" variant="body1">
          <Box fontWeight="fontWeightBold" marginBottom={-1}>{position}</Box>
        </Typography>
        { !!details.length && (
        <Typography variant="body1" paragraph component="div">
          { details.map((detail, index) => (
            <Box key={index} display="block" marginBottom={-1}>{detail}</Box>
          ))}
        </Typography>
        )}
        { children && <Typography variant="body1">{children}</Typography>}
      </Box>
    </div>
  );
};

ExperienceBlock.defaultProps = {
  avatar: undefined,
  details: []
};

ExperienceBlock.propTypes = {
  children: PropTypes.node.isRequired,
  avatar: PropTypes.string,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string),
};