import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GoogleAnalytics } from 'components/GoogleAnalytics/GoogleAnalytics';
import { Wrapper } from 'components/Wrapper/Wrapper';
import { Home } from 'components/Home/Home';
import { BlogPost } from 'components/BlogPost/BlogPost';
import { Projects } from 'components/Projects/Projects';
import { ProjectRouter } from 'components/ProjectRouter/ProjectRouter';
import { Resume } from 'components/Resume/Resume';
import { Contact } from 'components/Contact/Contact';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalytics />
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
  );
};
