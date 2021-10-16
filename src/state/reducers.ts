import * as slices from "state/slices";

export const reducer = {
  counter: slices.counterSlice.reducer,
  settings: slices.settingsSlice.reducer
};
