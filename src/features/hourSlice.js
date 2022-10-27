import { createSlice } from "@reduxjs/toolkit";
import Data from "../data";
import Filters from "../filters";

const initialState = {
  defaultState: Data,
  defaultTimeFrame: "weekly",
  defaultFilter: Filters,
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
