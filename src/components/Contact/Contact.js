import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import DataContext from 'DataContext';
import Meta from 'components/Meta/Meta'

export const Contact = () => {
  const { settings } = React.useContext(DataContext); 
  const { twitter, linkedIn } = settings[0].socialMedia;
  return (
    <React.Fragment>
      <Meta title={"Contact"} />
      <Typography gutterBottom variant="h1">
        Say
        {' '}
        <Box href="mailto:hi@kevinolsson.com" underline="always" component={Link}> hej, kamusta!</Box>
      </Typography>
      <Box maxWidth={640}>
        <Typography gutterBottom variant="h5">
          You can get in touch with me at <Box href="mailto:hi@kevinolsson.com" fontWeight="fontWeightBold" color="portfolio.dark" component={Link}>hi@kevinolsson.com</Box>. You can also reach out to me on social media via
          {' '}
          <Box href={linkedIn} component={Link} fontWeight="fontWeightBold" color="portfolio.dark">LinkedIn</Box>
          {' '}
          or
          {' '}
          <Box href={twitter} component={Link} fontWeight="fontWeightBold" color="portfolio.dark">Twitter</Box>
          .
        </Typography>
        <Typography variant="body1" paragraph>
          I am currently employed full time at
          {' '}
          <Link
            href="https://www.pamind.se/"
            underline="always"
            color="primary"
          >
            Påmind AB
          </Link>
          {' '}
          as a Front-end developer.
          However, don’t let that stop you from reaching out! I love building things
          so I am always open for small side projects. Alternatively,
          my friends at
          {' '}
          <Link
            href="https://kirigami.co/"
            underline="always"
            color="primary"
          >
            Kirigami
          </Link>
          {' '}
          could always lend a helping hand!
      </Typography>
    </Box>
  </React.Fragment>
)};