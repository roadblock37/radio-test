import { createSlice } from "@reduxjs/toolkit";
import Data from "../data";

const initialState = {
  defaultState: [Data],
};
const hourSlice = createSlice({
  name: "hours",
  initialState,
  reducers: {},
});
export default hourSlice.reducer;
