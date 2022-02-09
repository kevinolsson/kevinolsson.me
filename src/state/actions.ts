import * as slices from "state/slices";

export const {
  increment,
  decrement,
  incrementByAmount
} = slices.counterSlice.actions;

export const { setActiveTheme } = slices.activeThemeSlice.actions;
