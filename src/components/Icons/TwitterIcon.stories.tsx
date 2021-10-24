import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwitterIcon from "./TwitterIcon";

export default {
  title: "Icons/Twitter",
  component: TwitterIcon
} as ComponentMeta<typeof TwitterIcon>;

const Template: ComponentStory<typeof TwitterIcon> = args => (
  <TwitterIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
