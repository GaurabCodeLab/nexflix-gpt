import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import Swal from "sweetalert2";
import { TOP_RATED_MOVIES_API, options } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch(TOP_RATED_MOVIES_API, options);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        dispatch(addTopRatedMovies(result?.results));
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error?.message ? error?.message : "Something went wrong",
        });
      }
    };
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
