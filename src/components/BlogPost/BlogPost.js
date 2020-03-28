import React from 'react';
import DataContext from 'DataContext';
import { useHistory, Link } from 'react-router-dom';
import Content from 'components/Content/Content';
import Meta from 'components/Meta/Meta';

export const BlogPost = () => {
  const history = useHistory();
  const { posts } = React.useContext(DataContext); 

  const slug = history.location.pathname.split('/')[2];
  const post = posts.find((post) => post.name === slug);

  const { title, body } = post;

  return post ? (
    <React.Fragment>
      <Meta title={title} />
      <div style={{height: '3000px'}}>
        <Link to='/blog'>Back to blog</Link>
        <h1>{title}</h1>
        <Content src={body} />
      </div>
    </React.Fragment>
  ) : <div>404 not found</div>;
};
