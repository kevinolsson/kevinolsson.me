import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const ResumeIntroduction = () => (
  <div>
    <Typography variant="body1">
          I am Front-end developer who is passionate about UX Design.
      {' '}
      <strong>I love building user interfaces.</strong>
      {' '}
          Everything here is more or less what exists on my
      {' '}
      <Link
        href="https://www.linkedin.com/in/kevin-olsson-54bb21136/"
        underline="always"
        color="primary"
      >
        LinkedIn
      </Link>
      {' '}
          profile. Born in Manila 🇵🇭, now sitting in Stockholm 🇸🇪
    </Typography>
  </div>
);


export default ResumeIntroduction;
