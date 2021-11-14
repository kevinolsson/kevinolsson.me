import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChipArray } from "./ChipArray";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default {
  title: "Components/ChipArray",
  component: ChipArray
} as ComponentMeta<typeof ChipArray>;

const Template: ComponentStory<typeof ChipArray> = args => (
  <ChipArray {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: ["Hello World", "Chip", "Pugs"]
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: [
    ["Hello World", <EmojiPeopleIcon />],
    ["Chips", <FastfoodIcon />],
    ["Pugs", <FavoriteBorderIcon />]
  ]
};
