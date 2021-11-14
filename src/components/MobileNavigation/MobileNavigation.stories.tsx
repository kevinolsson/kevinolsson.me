import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MobileNavigation } from "./MobileNavigation";
import { Typography } from "@mui/material";

export default {
  title: "Components/MobileNavigation",
  component: MobileNavigation
} as ComponentMeta<typeof MobileNavigation>;

const Template: ComponentStory<typeof MobileNavigation> = args => (
  <div style={{ height: "3000px" }}>
    <Typography component="div">
      <p style={{ maxWidth: "40ch" }}>
        This component is normally only visible on mobile and is designed for
        mobile consumption, hence it looks funny when viewing it on desktop
        mode.
      </p>
      <p style={{ maxWidth: "40ch" }}>
        It's like that because I'm just reusing the Navigation component for
        both desktop and mobile mode. Try viewing it on mobile to get a better
        feel of how it works.
      </p>
    </Typography>
    <MobileNavigation {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  forceMobileView: true
};
