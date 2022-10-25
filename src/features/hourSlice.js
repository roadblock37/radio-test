import { createSlice } from "@reduxjs/toolkit";
import Data from "../data";

const initialState = {
  defaultState: Data,
  defaultTimeFrame: "weekly",
};
const hourSlice = createSlice({
  name: "hours",
  initialState,
  reducers: {
    setTimeFrame: (state, action) => {
      state.defaultTimeFrame = action.payload;
    },
  },
});

export const { setTimeFrame } = hourSlice.actions;
export default hourSlice.reducer;
