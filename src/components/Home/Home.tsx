import React from "react";
import logo from "logo.svg";
import { Counter } from "components/Counter/Counter";
import classes from "./Home.module.scss";
import { Button } from "components/Button/Button";
import { MDX } from "components/MDX/MDX";
import { Layout } from "components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <MDX filename={"2021-08-29-Test-MDX"} />
      <div className={classes.Home}>
        <div className={classes.todo}>
          <h2>Todo:</h2>
          <ul>
            <li className={classes.done}>
              Setup storybook for isolated UI development
            </li>
            <li>
              Migrate existing components into TypeScript
              <ul>
                <li className={classes.done}>Button</li>
                <li className={classes.pass}>BlogBlock</li>
                <li className={classes.pass}>BlogPost</li>
                <li className={classes.done}>ChipArray</li>
                <li className={classes.done}>Contact</li>
                <li className={classes.pass}>Content</li>
                <li className={classes.done}>ErrorMessage</li>
                <li className={classes.done}>ExperienceBlock</li>
                <li className={classes.done}>GoogleAnalytics</li>
                <li className={classes.done}>HamburgerButton</li>
                <li className={classes.done}>HamburgerIcon</li>
                <li className={classes.done}>Head</li>
                <li className={classes.done}>Header</li>
                <li>Home</li>
                <li className={classes.done}>Icons</li>
                <li className={classes.done}>IgnoreLayoutWrapper</li>
                <li className={classes.done}>Layout</li>
                <li className={classes.done}>Meta</li>
                <li className={classes.done}>MobileNavigation</li>
                <li className={classes.done}>Navigation</li>
                <li>Playground</li>
                <li>ProjectPost</li>
                <li>ProjectRreview</li>
                <li>ProjectRouter</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Thumbnail</li>
                <li>ThumbnailGrid</li>
                <li className={classes.done}>Title</li>
                <li>Wrapper</li>
              </ul>
            </li>
            <li>
              Find a way to provision articles via MDX (or just hard code them)
              <ul>
                <li>Need solution for routing</li>
                <li>Need solution for "Next article"</li>
                <li>Probably a lot of other stuff will apear here</li>
              </ul>
            </li>
            <li>Move to Enzyme and add more extensive test coverage</li>
          </ul>
        </div>
        <header className={classes.HomeHeader}>
          <img src={logo} className={classes.HomeLogo} alt="logo" />
          <Counter />
          <p>
            Edit <code>src/components/Home/Home.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <Button
              href="https:reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Button>
            <span>, </span>
            <Button
              href="https:redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </Button>
            <span>, </span>
            <Button
              href="https:redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </Button>
            ,<span> and </span>
            <Button
              href="https:react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </Button>
          </span>
        </header>
      </div>
    </Layout>
  );
};
