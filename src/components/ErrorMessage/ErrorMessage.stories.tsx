import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

export default {
  title: "Components/ErrorMessage",
  component: ErrorMessage
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = args => (
  <ErrorMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  code: 404
};
