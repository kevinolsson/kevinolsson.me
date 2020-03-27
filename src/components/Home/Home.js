import React from 'react';
import { Link } from 'react-router-dom'
import DataContext from 'DataContext';

export const Home = () => {
  const { posts } = React.useContext(DataContext); 

  return (
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
  );
};