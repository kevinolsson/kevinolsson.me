import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Contact = () => (
  <Box maxWidth={640}>
    <Typography gutterBottom variant="h1">
      Say
      {' '}
      <Box href="mailto:hi@kevin.me" underline="always" component={Link}>hi@kevin.me</Box>
    </Typography>
    <Typography gutterBottom variant="h5">
    Alternatively, you can reach out to me on
      {' '}
      <Box href="https://www.linkedin.com/in/kevin-olsson-54bb21136/" component={Link} fontWeight="fontWeightBold" color="portfolio.dark">LinkedIn</Box>
      {' '}
or
      {' '}
      <Box href="https://twitter.com/olssoneerz" component={Link} fontWeight="fontWeightBold" color="portfolio.dark">Twitter</Box>
.
    </Typography>
    <Typography variant="body1" paragraph>
      I am currently employed full time at Påmind AB as a Front-end developer.
      However, don’t let that stop you from reaching out!I love building things
so I am always open for small side projects.
      {' '}
Alternatively,
      my friends at Kirigami could always lend a helping hand!
    </Typography>
  </Box>
);


export default Contact;
