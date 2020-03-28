import React from 'react';
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';
import { BlogBlock } from 'components/BlogBlock/BlogBlock'
import { dateFormatted } from 'util/date';

export const Home = () => {
  const { posts, settings } = React.useContext(DataContext); 
  const { siteDescription } = settings[0];

  return (
    <React.Fragment>
      <Meta title={siteDescription} />
      <div>
        {!!posts.length && posts.map((post, index) => !!post && (
          <BlogBlock
            key={index}
            featured={index === 0}
            title={post.title}
            url={`/blog/${post.name}`}
            body={post.subtitle}
            date={dateFormatted(post.date)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};