import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from 'components/Home/Home';
import { About } from 'components/About/About';
import { Blog } from 'components/Blog/Blog';
import { BlogPost } from 'components/BlogPost/BlogPost';
import { Contact } from 'components/Contact/Contact';
import { GoogleAnalytics } from 'components/GoogleAnalytics/GoogleAnalytics'
 
export const Router = props => {

  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact >
          <About />
        </Route>
        <Route path='/blog' exact>
          <Blog />
        </Route>
        <Route path='/blog/:blugSlug' >
          <BlogPost />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  
};
