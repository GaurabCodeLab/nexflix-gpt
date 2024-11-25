import { useEffect } from "react";
import { LOGO_URL, USER_AVTAR } from "../utils/constants";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

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
    <div className="flex justify-between items-center bg-black">
      <img className="h-20" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex cursor-pointer" onClick={handleClick}>
          <img src={USER_AVTAR} className="h-10 pt-2 pe-4" alt="user-avtar" />
          <div className="text-white pt-2 pe-4">Sign Out</div>
        </div>
      )}
    </div>
  );
};

export default Header;
