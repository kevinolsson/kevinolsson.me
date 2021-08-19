import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkedInIcon from "./LinkedInIcon";

export default {
  title: "Icons/LinkedIn",
  component: LinkedInIcon
} as ComponentMeta<typeof LinkedInIcon>;

const Template: ComponentStory<typeof LinkedInIcon> = args => (
  <LinkedInIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
