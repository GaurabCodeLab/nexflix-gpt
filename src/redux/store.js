import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import userPreferenceReducer from "./userPreferenceSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    userPreference: userPreferenceReducer,
  },
});

export default store;
