import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "@mui/material";
import { AppWrapper, IAppWrapper } from "./AppWrapper";

export default {
  title: "Components/AppWrapper",
  component: AppWrapper
} as Meta;

const Template: Story<IAppWrapper> = args => <AppWrapper {...args} />;

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
