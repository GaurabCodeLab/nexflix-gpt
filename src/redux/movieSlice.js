import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    featureMovieVideos: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addFeatureMovieVideos: (state, action) => {
      state.featureMovieVideos = action.payload;
    },
    removeMovies: (state) => {
      state.movies = [];
      state.featureMovieVideos = [];
    },
  },
});

export default movieSlice.reducer;
export const { addMovies, removeMovies, addFeatureMovieVideos } =
  movieSlice.actions;
