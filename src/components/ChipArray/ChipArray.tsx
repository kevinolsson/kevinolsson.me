import React from "react";
import Chip from "@mui/material/Chip";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  (theme?: any) => ({
    root: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap"
    },
    chip: {
      borderRadius: theme.spacing(),
      borderColor: theme.palette.borderColor,
      color: theme.palette.textColor,
      padding: theme.spacing(),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      ...theme.typography.body2
    },
    icon: {
      fill: theme.palette.primaryColor,
      width: theme.spacing(4),
      height: theme.spacing(4)
    }
  }),
  { name: "chipArray" }
);

interface IChipArray {
  label: Array<string | [string, JSX.Element]>;
  [x: string]: any;
}

export const ChipArray = ({ label, ChipProps }: IChipArray): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {label.map((l, index) => {
        const isArray = Array.isArray(l);
        const text = isArray ? l[0] : l;
        const icon = isArray ? l[1] : undefined;
        return (
          <Chip
            classes={{
              root: classes.chip,
              icon: classes.icon
            }}
            key={index}
            variant="outlined"
            label={text}
            icon={icon}
            {...ChipProps}
          />
        );
      })}
    </div>
  );
};
