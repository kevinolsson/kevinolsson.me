import React from "react";
import classes from "./Home.module.scss";
import { Typography, Divider } from "@material-ui/core";
import { MDX } from "components/MDX/MDX";
import { Layout } from "components/Layout/Layout";

export const Home = () => {
  return (
    <Layout>
      <MDX filename={"2021-08-29-Test-MDX"} />
      <Divider />
      <Typography>
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
                  <li className={classes.done}>Resume</li>
                  <li>Thumbnail</li>
                  <li>ThumbnailGrid</li>
                  <li className={classes.done}>Title</li>
                  <li className={classes.done}>Wrapper</li>
                </ul>
              </li>
              <li>
                Find a way to provision articles via MDX (or just hard code
                them)
                <ul>
                  <li>Need solution for routing</li>
                  <li>Need solution for "Next article"</li>
                  <li>Probably a lot of other stuff will apear here</li>
                </ul>
              </li>
              <li>Move to Enzyme and add more extensive test coverage</li>
            </ul>
          </div>
        </div>
      </Typography>
    </Layout>
  );
};
