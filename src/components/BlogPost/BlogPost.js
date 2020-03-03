import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useHistory, Link } from 'react-router-dom';
import { blogs } from 'blogs';
import Button from 'components/Button/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const BlogPost = () => {
  const history = useHistory();
  const slug = history.location.pathname.split('/')[2];
  const post = blogs.find((blog) => blog.slug === slug);

  return post ? (
    <div>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBackIcon />}
      >
        Back to blog
      </Button>
      {post.title && <Typography gutterBottom variant="h1">{post.title}</Typography>}
      <div style={{ maxWidth: '540px' }}>
        {post.date && <Typography paragraph variant="body1"><strong>{post.date}</strong></Typography>}
        {post.subtitle && <Typography gutterBottom variant="h5">{post.subtitle}</Typography>}
        <Typography>
          {post.body}
        </Typography>
      </div>
    </div>
  ) : '404 not found';
};

export default BlogPost;
