import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import StorybookIcon from "./StorybookIcon";

export default {
  title: "Icons/Storybook",
  component: StorybookIcon
} as ComponentMeta<typeof StorybookIcon>;

const Template: ComponentStory<typeof StorybookIcon> = args => (
  <StorybookIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {};
