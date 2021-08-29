import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { Typography } from "@material-ui/core";

export default {
  title: "Components/Layout",
  component: Layout
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = args => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <Typography component="div">
      <Typography variant="h1">Layout</Typography>
      <p>
        This component wraps all child elements into a centered 1-column layout.
        It exists so that most components wrapped in it adheres to a consistent
        width and it is designed with multiple devices in mind.
      </p>
      <p>
        It also takes care of all the necessary paddings and margins between its
        contents and the actual browser viewport.
      </p>
    </Typography>
  )
};
