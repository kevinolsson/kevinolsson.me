import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IgnoreLayoutWrapper } from "./IgnoreLayoutWrapper";
import { Typography } from "@material-ui/core";

export default {
  title: "Components/IgnoreLayoutWrapper",
  component: IgnoreLayoutWrapper
} as ComponentMeta<typeof IgnoreLayoutWrapper>;

const Template: ComponentStory<typeof IgnoreLayoutWrapper> = args => (
  <IgnoreLayoutWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Typography component="div">
      <Typography variant="h1">IgnoreLayoutWrapper</Typography>
      <p>
        Remember when I said that sometimes I like to ignore the wrapper. Yeah,
        I achieve that with this component right here.
      </p>
    </Typography>
  )
};
