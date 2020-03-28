import React from 'react';
import Typography from '@material-ui/core/Typography';
import Meta from 'components/Meta/Meta'
import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <React.Fragment>
      <Meta title={"Projects"} />
      <Typography gutterBottom variant="h1">Not yet done. <span role="img" aria-label="emoji">🙊</span></Typography>
      <Typography gutterBottom variant="h5">
        Im building a few cool stuff in line with this page so its taking awhile.
      </Typography>
      <Typography>Hopefully by this time I already written something on my <Link to="/">blog</Link> to keep you busy.</Typography>
    </React.Fragment>

  );
};