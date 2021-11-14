import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme: any) => ({
    root: {
      transform: `scale(0.8) translateY(-${theme.spacing(0.25)}px)` // No hate, I got lazy to properly format the SVG icon 💩
    }
  }),
  { name: "StorybookIcon" }
);

const StorybookIcon = (props: { [x: string]: any }): JSX.Element => {
  const classes = useStyles();

  return (
    <SvgIcon
      className={classes.root}
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 319"
      {...props}
    >
      <defs>
        <path
          d="M9.872 293.324L.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975c.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004c-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388z"
          id="icon-nav-next-0"
        />
      </defs>
      <mask id="icon-nav-next-1" fill="#fff">
        <use xlinkHref="#icon-nav-next-0" />
      </mask>
      <use fill="#453751" xlinkHref="#icon-nav-next-0" />
      <path
        d="M188.665 39.127l1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 0 1-3.864 1.96l-11.835-9.325l-14.013 10.63a2.387 2.387 0 0 1-3.829-2.001zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131c0-42.402-22.752-64.684-64.415-64.684c-41.662 0-65.005 22.628-65.005 56.57c0 59.117 79.78 60.249 79.78 92.494c0 9.052-4.433 14.426-14.184 14.426c-12.705 0-17.729-6.49-17.138-28.552c0-4.786-48.458-6.278-49.936 0c-3.762 53.466 29.548 68.887 67.665 68.887c36.935 0 65.892-19.687 65.892-55.326c0-63.36-80.961-61.663-80.961-93.06c0-12.728 9.455-14.425 15.07-14.425c5.909 0 16.546 1.042 15.66 24.801z"
        fill="#FFF"
        mask="url(#icon-nav-next-1)"
      />
    </SvgIcon>
  );
};

export default StorybookIcon;
