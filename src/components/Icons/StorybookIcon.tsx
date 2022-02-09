import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import makeStyles from "@mui/styles/makeStyles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      transform: `scale(0.8) translateY(-${theme.spacing(0.25)})` // No hate, I got lazy to properly format the SVG icon 💩
    }
  }),
  { name: "StorybookIcon" }
);

const StorybookIcon = (props: { [x: string]: any }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme() as any;
  return (
    <SvgIcon
      className={classes.root}
      role="img"
      viewBox="0 0 256 319"
      {...props}
    >
      <title>storybook</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="storybook" fill={theme.palette.iconColor} fill-rule="nonzero">
          <path
            d="M190.165319,3.05252904 L188.665,39.127 C188.626099,40.0511224 189.124575,40.9145362 189.944327,41.3429311 C190.764079,41.7713259 191.757532,41.6875803 192.494,41.128 L206.507,30.498 L218.342,39.823 C219.072282,40.3991975 220.070775,40.4986619 220.900374,40.077851 C221.729972,39.6570402 222.239538,38.7926186 222.206,37.863 L220.92346,1.13015385 L238.494,0.032 C247.316,-0.52 254.914,6.185 255.466,15.007 C255.486,15.339 255.497,15.672 255.497,16.005 L255.497,302.319 C255.497,311.158 248.332,318.323 239.493,318.323 C239.253,318.323 239.013,318.318 238.775,318.307 L25.148,308.712 C16.828,308.339 10.185,301.647 9.872,293.324 L0.012,30.574 C-0.315,21.895 6.338,14.54 15.005,14 L190.165319,3.05252904 Z M149.414,119.98 C149.414,126.207 191.356,123.223 196.986,118.849 C196.986,76.447 174.234,54.165 132.571,54.165 C90.909,54.165 67.566,76.793 67.566,110.735 C67.566,169.852 147.346,170.984 147.346,203.229 C147.346,212.281 142.913,217.655 133.162,217.655 C120.457,217.655 115.433,211.165 116.024,189.103 C116.024,184.317 67.566,182.825 66.088,189.103 C62.326,242.569 95.636,257.99 133.753,257.99 C170.688,257.99 199.645,238.303 199.645,202.664 C199.645,139.304 118.684,141.001 118.684,109.604 C118.684,96.876 128.139,95.179 133.754,95.179 C139.663,95.179 150.3,96.221 149.414,119.98 Z"
            id="icon-nav-next-0"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default StorybookIcon;
