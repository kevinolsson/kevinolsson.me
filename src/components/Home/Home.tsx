import React from "react";
import logo from "logo.svg";
import { Counter } from "components/Counter/Counter";
import classes from "./Home.module.scss";
import { Button } from "components/Button/Button";
import { MDX } from "components/MDX/MDX";

export const Home = () => {
  return (
    <React.Fragment>
      <MDX file={"2021-08-29-Test-MDX"} />
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
                <li>Contact</li>
                <li>Content</li>
                <li>ErrorMessage</li>
                <li className={classes.done}>ExperienceBlock</li>
                <li>GoogleAnalytics</li>
                <li>HamburgerButton</li>
                <li>HamburgerIcon</li>
                <li>Head</li>
                <li>Header</li>
                <li>Home</li>
                <li>Icons</li>
                <li>IgnoreLayoutWrapper</li>
                <li>Layout</li>
                <li>Meta</li>
                <li>MobileNavigation</li>
                <li>Playground</li>
                <li>ProjectPost</li>
                <li>ProjectRreview</li>
                <li>ProjectRouter</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Thumbnail</li>
                <li>ThumbnailGrid</li>
                <li>Title</li>
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
    </React.Fragment>
  );
};
