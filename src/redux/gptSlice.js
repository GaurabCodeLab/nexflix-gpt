import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
  },
  reducers: {
    toggleGpt: (state) => {
      state.showGpt = !state.showGpt;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGpt } = gptSlice.actions;
