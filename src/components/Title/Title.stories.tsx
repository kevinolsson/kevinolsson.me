import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContextAwareTitle } from "./ContextAwareTitle";

export default {
  title: "Components/Title",
  component: ContextAwareTitle
} as ComponentMeta<typeof ContextAwareTitle>;

const Template: ComponentStory<typeof ContextAwareTitle> = args => (
  <ContextAwareTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  prominent: false
};

export const Prominent = Template.bind({});
Prominent.args = {
  prominent: true
};
