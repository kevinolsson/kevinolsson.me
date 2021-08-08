import React from "react";
import logo from "logo.svg";
import { Counter } from "components/Counter/Counter";
import classes from "./Home.module.scss";
import { Button } from "components/Button/Button";

export const Home = () => {
  return (
    <div className={classes.Home}>
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
