import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addMovies } from "../redux/movieSlice";
import useNowPlaying from "../hooks/useNowPlaying";

const Browse = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useNowPlaying();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  const handleClick = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: error?.message ? error?.message : "Something went wrong",
        });
      });
  };
  return (
    <div className="flex gap-5">
      <h1>Browse component</h1>
      <button className="border py-2 px-3" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Browse;
