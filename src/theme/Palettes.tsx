/* Global color - consistent across all themes
- To be only used when color contrast score can be ignored.
- Otherwise shouldn't be used directly by components */
export const globalPalette = {
  pink: {
    main: "#E556A2",
    light: "#F27BBA",
    dark: "#D7398D"
  },
  green: {
    main: "#48EC95",
    light: "#90FFC4",
    dark: "#30815A"
  },
  grey: {
    900: "#27222C",
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
  borderColor: globalPalette.grey[300],
  buttonBackgroundColor: globalPalette.grey[500],
  buttonTextColor: globalPalette.grey[100],
  placeholderBackgroundColor: globalPalette.grey[200],
  backgroundColor: globalPalette.grey[100],
  menuBackgroundColor: hexToRgba(globalPalette.grey[100], 0.95),
  menuActiveLinkColor: globalPalette.green.dark,
  iconColor: globalPalette.grey[800]
};

export const darkPalette = {
  primaryColor: globalPalette.pink.light,
  secondaryColor: globalPalette.green.light,
  textColor: globalPalette.grey[100],
  borderColor: globalPalette.grey[600],
  buttonBackgroundColor: globalPalette.grey[500],
  buttonTextColor: globalPalette.grey[100],
  placeholderBackgroundColor: globalPalette.grey[800],
  backgroundColor: globalPalette.grey[900],
  menuBackgroundColor: hexToRgba(globalPalette.grey[900], 0.95),
  menuActiveLinkColor: globalPalette.green.main,
  iconColor: globalPalette.grey[200]
};
