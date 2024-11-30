import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";
import Swal from "sweetalert2";
import { UPCOMING_MOVIES_API, options } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const response = await fetch(UPCOMING_MOVIES_API, options);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const result = await response.json();
        console.log("result hai", result);
        dispatch(addUpcomingMovies(result?.results));
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error?.message ? error?.message : "Something went wrong",
        });
      }
    };
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
