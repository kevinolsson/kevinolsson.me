import React from 'react';
import { Link } from 'react-router-dom'
import DataContext from 'DataContext';

export const Blog = () => {
  const [filterCategory, setFilterCategory] = React.useState(false);
  const { posts, postCategories } = React.useContext(DataContext); 

  return (
    <div>
      <h1>This is the blog list page</h1>
      <Link to="/">Back</Link>
      
      {!!postCategories.length && (
        <React.Fragment>
          <h3>Categories</h3>
          <p>Showing{' '}
            <strong>
              {filterCategory ? filterCategory : 'All'}
            </strong> 
            {' '}categories
          </p>
          <ul>
            <li>
              <button onClick={() => { setFilterCategory(false)}}>
                All
              </button>
            </li>
            {postCategories.map((category, index) => {
              return (
                <li key={index}>
                  <button onClick={() => { setFilterCategory(category.title)}}>
                    {category.title}
                  </button>
                </li>
              )
            })}
          </ul>
        </React.Fragment>
      )}
      


      {!!posts.length && (
        <div>
          <h3>Posts</h3>
          <ul>
            {posts.map((post,index) => {
                return !filterCategory || (
                  !!filterCategory && 
                  !!post.categories &&
                  !!post.categories.find(c => c.category === filterCategory)
                ) ? (
                  <li key={index}>
                    <Link to={`/blog/${post.name}`}>
                      {post.title}
                    </Link>
                  </li>
                ) : null
            })}
          </ul>
        </div>
      )}
    </div>
  );
};