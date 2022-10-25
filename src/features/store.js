import { configureStore } from "@reduxjs/toolkit";
import hourReducer from "./hourSlice";

export const store = configureStore({
  reducer: {
    hours: hourReducer,
  },
});
