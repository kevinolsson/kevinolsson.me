/* Global color - consistent across all themes
- To be only used when color contrast score can be ignored.
- Otherwise shouldn't be used directly by components */
export const globalPalette = {
  pink: {
    main: "#E556A2",
    light: "#3B3442",
    dark: "#453751"
  },
  green: {
    main: "#48EC95",
    light: "#90FFC4",
    dark: "#30815A"
  },
  grey: {
    900: "#242C22",
    800: "#3B3442",
    700: "#453751",
    600: "#6A6172",
    500: "#756C7D",
    400: "#A9A2AF",
    300: "#CAC6CE",
    200: "#EEEEEE",
    100: "#FFFFFF"
  }
};

const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

/* Alias palettes.
- Naming based off purposed, rather than being
- Used direectly by components */

// const darkPalette = {
//     primaryColor: "#D7398D",
//     secondaryColor: "#D7378C",
//     textColor: "#453751",
//     buttonColor: "#756C7D",
//     backgroundColorLight: "#EEEEEE",
//     backgroundColor: "#FFFFFF",
//     transparentBackgroundColor: "rgba(255,255,255,0.95)"
// }

export const lightPalette = {
  primaryColor: globalPalette.pink.dark,
  secondaryColor: globalPalette.green.dark,
  textColor: globalPalette.grey[900],
  buttonBackgroundColor: globalPalette.grey[500],
  placeholderBackgroundColor: globalPalette.grey[200],
  backgroundColor: globalPalette.grey[100],
  menuBackgroundColor: hexToRgba(globalPalette.grey[100], 0.95)
};
