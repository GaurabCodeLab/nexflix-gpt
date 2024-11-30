import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import Swal from "sweetalert2";
import { POPULAR_MOVIES_API, options } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getNowPopularMovies = async () => {
      try {
        const response = await fetch(POPULAR_MOVIES_API, options);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        console.log("result hai", result);
        dispatch(addPopularMovies(result?.results));
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error?.message ? error?.message : "Something went wrong",
        });
      }
    };
    getNowPopularMovies();
  }, []);
};

export default usePopularMovies;
