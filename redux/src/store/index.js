import { createSlice, configureStore } from "@reduxjs/toolkit";

//initial state
const initialState = { counter: 0, showCounter: true };

// slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    increment10(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

// single
const store = configureStore({
  reducer: counterSlice.reducer,
});

//actions
export const counterActions = counterSlice.actions;
export default store;
