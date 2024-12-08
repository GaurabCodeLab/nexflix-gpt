import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/gptSlice";
import { MOVIE_SEARCH_API } from "../utils/constants";
import Swal from "sweetalert2";

const useFetchMovies = (movieLists) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async (query) => {
      try {
        const response = await fetch(MOVIE_SEARCH_API + query, options);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        return result.results;
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error.message ? error.message : "Something went wrong",
        });
      }
    };
    if (movieLists) {
      const moviesPromise = movieLists.map((value) => fetchMovies(value));
      Promise.all(moviesPromise)
        .then((moviesListArray) => {
          dispatch(addMovies(moviesListArray));
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            text: error.message ? error.message : "Something went wrong",
          });
        });
    }
  }, [movieLists]);
};

export default useFetchMovies;
