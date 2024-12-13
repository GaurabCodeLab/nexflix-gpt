import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/movieSlice";
import Swal from "sweetalert2";
import { NOW_PLAYING_MOVIES_API, options } from "../utils/constants";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      console.log("movie api called");

      try {
        const response = await fetch(NOW_PLAYING_MOVIES_API, options);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        dispatch(addMovies(result?.results));
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error?.message ? error?.message : "Something went wrong",
        });
      }
    };
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
