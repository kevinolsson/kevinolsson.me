import React from 'react';
import { Link } from 'react-router-dom'
import DataContext from 'DataContext';

export const Contact = () => {
  const { pages } = React.useContext(DataContext); 
  const contact = pages.find(array => array.name === 'contact');
  return (
    <div>
      <h1>This is the contact page</h1>
      <Link to="/">Back</Link>
      <div>{JSON.stringify(contact)}</div>
    </div>
  );
};