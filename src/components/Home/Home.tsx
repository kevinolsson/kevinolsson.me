import React from "react";
import logo from "logo.svg";
import classes from "./Home.module.scss";
import Context from "components/Context/Context";
import HelloWorld from "!babel-loader!@mdx-js/loader!content/HelloWorld.mdx";

export const Home = () => {
  const helloWorld = React.useContext(Context);
  // eslint-disable-next-line no-console
  console.log({ helloWorld });

  helloWorld.theme.setLightTheme(false);
  return (
    <div className={classes.Home}>
      <HelloWorld />
      <header className={classes.HomeHeader}>
        <img src={logo} className={classes.HomeLogo} alt="logo" />
        <p>
          Edit <code>src/components/Home/Home.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={classes.HomeLink}
            href="https:reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={classes.HomeLink}
            href="https:redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={classes.HomeLink}
            href="https:redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={classes.HomeLink}
            href="https:react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};
