import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addFeatureMovieVideos } from "../redux/movieSlice";
import { options } from "../utils/constants";

const useFeatureMovieVideos = () => {
  const moviesList = useSelector((store) => store.movie.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrailor = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${moviesList[0]?.id}/videos`,
          options
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        dispatch(addFeatureMovieVideos(result?.results));
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error?.message ? error?.message : "Something went wrong",
        });
      }
    };
    if (moviesList[0]?.id) {
      fetchTrailor();
    }
  }, [moviesList[0]?.id]);
};

export default useFeatureMovieVideos;
