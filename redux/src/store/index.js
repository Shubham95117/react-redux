// single
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

import counterReducer from "./counter";
import authReducer from "./auth";
import { configureStore } from "@reduxjs/toolkit";

// multiple
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

//actions

export default store;
