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
  },
});

export default gptSlice.reducer;
export const { toggleGpt, addMovies } = gptSlice.actions;
