import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';
import { Button } from 'components/Button/Button';

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100%',
      position: 'relative'
    },
    grid: {
      minHeight: '300px',
      transition: 'all 0.2s ease-out',
      display: 'grid',
      gridGap: theme.spacing(4),
      gridTemplateColumns: 'repeat(3, 240px)',
      overflowX: 'scroll',
      overflowY: 'hidden',
      scrollSnapType: 'x mandatory',
      scrollbarWidth: 'none',
      scrollPadding: '0 16px',
      '-webkit-overflow-scrolling': 'touch',
      '&::-webkit-scrollbar': {
        display: 'none'
      },
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    },
    thumbnailWrapper: {
      scrollSnapAlign: 'start'
    },
    thumbnailWrapperFirst: {
      paddingLeft: theme.spacing(4)
    },
    thumbnailWrapperLast: {
      paddingRight: theme.spacing(4)
    },
    showMoreButton: {
      margin: theme.spacing(4),
      marginBottom: 0
    }
  }),
  { name: 'ProjectPreview' }
);

export const ProjectPreview = ({ projects }) => {
  const classes = useStyles();
  const showMore = projects.length > 3;
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {projects.slice(0, 3).map(({ thumbnail, type, url, title }, index) => (
          <div
            key={index}
            className={[
              classes.thumbnailWrapper,
              index === 0 ? classes.thumbnailWrapperFirst : undefined,
              (projects.length > 3 && index + 1 === 3) ||
              (projects.length <= 3 && index + 1 === projects.length)
                ? classes.thumbnailWrapperLast
                : undefined
            ].join(' ')}
          >
            <Thumbnail
              key={index}
              title={title}
              type={type}
              thumbnail={thumbnail}
              url={url + '?homepage=true'}
            />
          </div>
        ))}
      </div>
      {showMore && (
        <Button
          component={Link}
          to="/projects"
          endIcon={<ArrowForwardIcon />}
          className={classes.showMoreButton}
        >
          See more projects
        </Button>
      )}
    </div>
  );
};

ProjectPreview.defaultProps = {
  projects: []
};

ProjectPreview.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      type: PropTypes.string,
      url: PropTypes.string
    })
  )
};
