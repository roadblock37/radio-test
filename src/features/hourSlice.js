import { createSlice } from "@reduxjs/toolkit";
import Data from "../data";
import Filters from "../filters";

const initialState = {
  defaultState: Data,
  defaultTimeFrame: "weekly",
  isDaily: false,
  isWeekly: true,
  isMonthly: false,
  defaultFilter: Filters,
};
const hourSlice = createSlice({
  name: "hours",
  initialState,
  reducers: {
    setTimeFrame: (state, action) => {
      state.defaultTimeFrame = action.payload;
    },
    setDaily: (state) => {
      state.isDaily = true;
      state.isWeekly = false;
      state.isMonthly = false;
      state.defaultTimeFrame = "daily";
    },
    setWeekly: (state) => {
      state.isDaily = false;
      state.isWeekly = true;
      state.isMonthly = false;
      state.defaultTimeFrame = "weekly";
    },
    setMonthly: (state) => {
      state.isDaily = false;
      state.isWeekly = false;
      state.isMonthly = true;
      state.defaultTimeFrame = "monthly";
    },
  },
});

export const { setTimeFrame, setDaily, setWeekly, setMonthly } =
  hourSlice.actions;
export default hourSlice.reducer;
