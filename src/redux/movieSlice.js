import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeMovies: (state) => {
      state.movies = [];
    },
  },
});

export default movieSlice.reducer;
export const { addMovies, removeMovies } = movieSlice.actions;
