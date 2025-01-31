import { createSlice } from "@reduxjs/toolkit";

const initialValue = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, increment, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
