import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});

export default store;
