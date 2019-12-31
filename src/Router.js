import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Wrapper from 'components/Wrapper';
import Home from 'components/Home/Home';
import BlogPost from 'components/BlogPost/BlogPost';

const Router = () => (
  <>
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/blog/:blogSlug">
            <BlogPost />
          </Route>
          <Route path="/projects" exact>
            Projects
          </Route>
          <Route path="/projects/:projectSlug">
            Project Post Page
          </Route>
          <Route path="/resume" exact>
            Resume
          </Route>
          <Route path="/contact" exact>
            Conact
          </Route>
          <Route>
            404 error
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  </>
);

export default Router;
