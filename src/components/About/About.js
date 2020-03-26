import React from 'react';
import { Link } from 'react-router-dom'
import DataContext from 'DataContext';

export const About = () => {
  const { pages } = React.useContext(DataContext); 
  const about = pages.find(array => array.name === 'about');
  return (
    <div>
      <h1>This is the about page</h1>
      <Link to="/">Back</Link>
      <div>{JSON.stringify(about)}</div>
    </div>
  );
};