import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    featureMovieVideos: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
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
export const {
  addMovies,
  removeMovies,
  addFeatureMovieVideos,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = movieSlice.actions;
