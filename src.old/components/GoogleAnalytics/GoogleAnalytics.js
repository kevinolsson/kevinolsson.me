import React from 'react'
import { Route } from 'react-router-dom'

export const GoogleAnalytics = () => {
  return (
    <Route
    path='/'
    render={({ location }) => {
      if (typeof window.ga === 'function') {
        window.ga('set', 'page', location.pathname + location.search)
        window.ga('send', 'pageview')
      }
      return null
    }}
  />
  );
};