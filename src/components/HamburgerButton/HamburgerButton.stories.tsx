import React from "react";
import { Typography } from "@material-ui/core";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HamburgerButton } from "./HamburgerButton";

export default {
  title: "Components/HamburgerButton",
  component: HamburgerButton
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = args => (
  <div>
    <Typography component="div">
      <p style={{ maxWidth: "40ch" }}>
        You can find the <strong>HamburgerButton</strong> on the lower right
        hand side.
      </p>
      <p style={{ maxWidth: "40ch" }}>
        Component is normally only visible on mobile, however passing{" "}
        <strong>forceMobileView</strong> as true displays even on desktop.
      </p>
    </Typography>
    <HamburgerButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  active: false,
  forceMobileView: true
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  forceMobileView: true
};
