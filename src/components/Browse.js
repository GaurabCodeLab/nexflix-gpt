import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import Swal from "sweetalert2";

const Browse = () => {
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
