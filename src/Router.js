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
import Contact from 'components/Contact/Contact';
import Resume from 'components/Resume/Resume';
import Projects from 'components/Projects/Projects';
import ProjectRouter from 'components/ProjectRouter/ProjectRouter';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

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
            <Projects />
          </Route>
          <Route path="/projects/:projectSlug">
            <ProjectRouter />
          </Route>
          <Route path="/resume" exact>
            <Resume />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route>
            <ErrorMessage code={404} />
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  </>
);

export default Router;
