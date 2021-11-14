import React from "react";
import { Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContextAwareHamburgerButton } from "./ContextAwareHamburgerButton";

export default {
  title: "Components/HamburgerButton",
  component: ContextAwareHamburgerButton
} as ComponentMeta<typeof ContextAwareHamburgerButton>;

const Template: ComponentStory<typeof ContextAwareHamburgerButton> = args => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ height: "3000px" }}>
      <Typography component="div">
        <p style={{ maxWidth: "40ch" }}>
          You can find the <strong>HamburgerButton</strong> on the lower right
          hand side.
        </p>
        <p style={{ maxWidth: "40ch" }}>
          Component is normally only visible on mobile and is designed for
          mobile consumption, hence no cursor when hovering over with a mouse.
          Passing <strong>forceMobileView</strong> as true allows me to render
          this component even on desktop.
        </p>
        <p style={{ maxWidth: "40ch" }}>
          Feel free to scroll to see the component in action!
        </p>
      </Typography>
      <ContextAwareHamburgerButton
        forceMobileView
        active={visible}
        handleClickCallback={toggleVisible}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
