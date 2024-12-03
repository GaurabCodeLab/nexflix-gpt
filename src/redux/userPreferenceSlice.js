import { createSlice } from "@reduxjs/toolkit";

const userPreferenceSlice = createSlice({
  name: "userPreference",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default userPreferenceSlice.reducer;
export const { changeLanguage } = userPreferenceSlice.actions;
