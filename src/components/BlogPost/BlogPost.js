import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useLocation, Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DataContext from 'DataContext';
import Content from 'components/Content/Content';
import { dateFormatted } from 'util/date';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import Meta from 'components/Meta/Meta';

export const BlogPost = () => {
  const location = useLocation();
  const { posts } = React.useContext(DataContext);

  const slug = location.pathname.split('/')[2];
  const post = posts.find(post => post.name === slug);

  return post ? (
    <div>
      <Meta title={post.title} />
      <Button component={Link} to="/" startIcon={<ArrowBackIcon />}>
        Back to blog
      </Button>
      {post.title && (
        <Typography gutterBottom variant="h1">
          {post.title}
        </Typography>
      )}
      <div style={{ maxWidth: '540px' }}>
        {post.date && (
          <Typography paragraph variant="body1">
            <strong>{dateFormatted(post.date)}</strong>
          </Typography>
        )}
        {post.subtitle && (
          <Typography gutterBottom variant="h5">
            {post.subtitle}
          </Typography>
        )}
        <Content src={post.body} />
      </div>
    </div>
  ) : (
    <ErrorMessage code={404} />
  );
};
