import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    searchMovies: [],
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
    addMovies: (state, action) => {
      state.searchMovies = action.payload;
    },
    resetGpt: (state) => {
      state.showGpt = false;
      state.searchMovies = [];
    },
  },
});

export default gptSlice.reducer;
export const { toggleGpt, addMovies, resetGpt } = gptSlice.actions;
