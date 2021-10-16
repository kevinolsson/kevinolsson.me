import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import settings from "settings.json";

type CounterSliceState = { value: number };
export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 } as CounterSliceState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      value: state.value + action.payload
    })
  }
});

export const settingsSlice = createSlice({
  name: "settings",
  initialState: settings,
  reducers: {}
});
