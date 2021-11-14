import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContextAwareNavigation } from "./ContextAwareNavigation";

export default {
  title: "Components/Navigation",
  component: ContextAwareNavigation
} as ComponentMeta<typeof ContextAwareNavigation>;

const Template: ComponentStory<typeof ContextAwareNavigation> = () => (
  <ContextAwareNavigation view="desktop" handleClickCallback={() => null} />
);

export const Default = Template.bind({});
