import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Contact } from "./Contact";

export default {
  title: "Components/Contact",
  component: Contact
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Default = Template.bind({});
