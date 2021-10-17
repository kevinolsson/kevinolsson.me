import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@material-ui/core";
import { AppWrapper } from "./AppWrapper";

export default {
  title: "Components/AppWrapper",
  component: AppWrapper
} as ComponentMeta<typeof AppWrapper>;

const Template: ComponentStory<typeof AppWrapper> = args => (
  <AppWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ maxWidth: "65ch" }}>
      <Typography>
        This component just adds together the Header, Layout, and
        MobileNavigation with whatever content we throw in the children prop.
      </Typography>
    </div>
  )
};
