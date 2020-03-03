import React from 'react';
import ProjectPreview from 'components/ProjectPreview/ProjectPreview';
import BlogBlock from 'components/BlogBlock/BlogBlock';
import IgnoreLayoutWrapper from 'components/IgnoreLayoutWrapper/IgnoreLayoutWrapper';
import { blogs } from 'blogs';

const Home = () => (
  <div>
    <IgnoreLayoutWrapper>
      <ProjectPreview projects={[
        {
          name: 'City',
          url: '/projects/project-city-1',
          thumbnail: 'https://source.unsplash.com/640x480/?city',
        },
        {
          name: 'Nature',
          url: '/projects/project-nature-2',
          thumbnail: 'https://source.unsplash.com/640x480/?nature',
        },
        {
          name: 'racing',
          url: '/projects/project-racing',
          thumbnail: 'https://source.unsplash.com/640x480/?motorsport',
        },
      ]}
      />
    </IgnoreLayoutWrapper>
    {!!blogs.length && blogs.map((blog, index) => !!blog && (
    <BlogBlock
      key={index}
      featured={index === 0}
      title={blog.title}
      url={`/blog/${blog.slug}`}
      body={blog.subtitle}
      date={blog.date}
    />
    ))}
  </div>
);

export default Home;
