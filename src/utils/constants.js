export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg";
export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const TMDP_API_KEY = "4965341b2a01ce9d104e7a5b62c9b844";
export const TMDP_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTY1MzQxYjJhMDFjZTlkMTA0ZTdhNWI2MmM5Yjg0NCIsIm5iZiI6MTczMjE3NjU0Mi4xODg2NTk0LCJzdWIiOiI2NzNlZTk1ODM3NGE2OTk1Mjc4OTc5MjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MSE9_35HyWnwrxarHXpvNirEq8e-4cti2g6CmH7h918";
export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing";
export const USER_AVTAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDP_ACCESS_TOKEN}`,
  },
};
export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w200/";
export const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming";
export const SUPPORTED_LANGUAGE = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];
export const GEMINI_API = "AIzaSyBHzeU4fla0TkTZOJ9Q-0OrvqpyY0n84Y8";
export const MOVIE_SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?query=";
