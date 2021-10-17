import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  ContextAwareTitleProps: {
    prominent: false
  }
};

export const Prominent = Template.bind({});
Prominent.args = {
  ContextAwareTitleProps: {
    prominent: true
  }
};