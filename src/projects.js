import Project1 from 'projects/Project1/Project1';
import Project2 from 'projects/Project2/Project2';

/* eslint-disable import/prefer-default-export */
export const projects = [
  {
    name: 'City',
    type: 'component',
    url: '/projects/project-city-1',
    thumbnail: 'https://source.unsplash.com/640x480/?city',
    component: Project1,
    props: {},
  },
  {
    name: 'Nature',
    type: 'component',
    url: '/projects/project-nature-2',
    thumbnail: 'https://source.unsplash.com/640x480/?nature',
    component: Project2,
    props: {},
  },
  {
    name: 'Google',
    type: 'external',
    url: 'https://google.com',
    thumbnail: 'https://source.unsplash.com/640x480/?google',
  },
  {
    name: 'City',
    type: 'component',
    url: '/projects/project-city-2',
    thumbnail: 'https://source.unsplash.com/640x480/?hello',
  },
  {
    name: 'Nature',
    type: 'component',
    url: '/projects/project-nature-3',
    thumbnail: 'https://source.unsplash.com/640x480/?work',
  },
  {
    name: 'Racing',
    type: 'component',
    url: '/projects/project-racing-4',
    thumbnail: 'https://source.unsplash.com/640x480/?beach',
  },
];
