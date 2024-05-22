import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Redux/Counter";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
