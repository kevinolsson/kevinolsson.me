import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Layout } from "./Layout";
import { Typography } from "@mui/material";

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
        It is designed with multiple devices in mind and exists so that{" "}
        <span style={{ fontStyle: "italic" }}>most</span> components wrapped in
        it adheres to a consistent width. I say most because sometimes I like
        ignoring this wrapper.
      </p>
      <p>
        It also takes care of all the necessary paddings and margins between its
        contents and the actual browser viewport.
      </p>
    </Typography>
  )
};
