import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Resume } from "./Resume";

export default {
  title: "Components/Resume",
  component: Resume
} as ComponentMeta<typeof Resume>;

const Template: ComponentStory<typeof Resume> = () => <Resume />;

export const Default = Template.bind({});
