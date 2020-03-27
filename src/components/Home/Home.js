import React from 'react';
import { Link } from 'react-router-dom'
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';

export const Home = () => {
  const { posts, settings } = React.useContext(DataContext); 
  const { siteDescription } = settings[0];

  return (
    <React.Fragment>
      <Meta title={siteDescription} />
      <div>
        <h1>This is the blog list page</h1>
        <Link to="/">Back</Link>

        {!!posts.length && (
          <div>
            <h3>Posts</h3>
            <ul>
              {posts.map((post,index) => 
                (<li key={index}>
                  <Link to={`/blog/${post.name}`}>
                    {post.title}
                  </Link>
                </li>)
              )}
            </ul>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};