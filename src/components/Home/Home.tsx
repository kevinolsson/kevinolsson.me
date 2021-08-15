import React from "react";
import logo from "logo.svg";
import { Counter } from "components/Counter/Counter";
import classes from "./Home.module.scss";
import { Button } from "components/Button/Button";

export const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes.todo}>
        <h2>Todo:</h2>
        <ul>
          <li>Setup storybook for isolated UI development</li>
          <li>Setup existing portfolio layout (minus the articles)</li>
          <li>
            Find a way to provision articles via MDX (or just hard code them)
            <ul>
              <li>Need solution for routing</li>
              <li>Need solution for "Next article"</li>
              <li>Probably a lot of other stuff will apear here</li>
            </ul>
          </li>
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
  );
};
