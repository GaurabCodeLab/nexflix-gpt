import { useEffect } from "react";
import { LOGO_URL, USER_AVTAR } from "../utils/constants";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleGpt } from "../redux/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { CONTENT } from "../utils/languageConstants";
import { changeLanguage } from "../redux/userPreferenceSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGpt);
  const lang = useSelector((store) => store.userPreference.language);
  const navigate = useNavigate();
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

  const handleGpt = () => {
    dispatch(toggleGpt());
  };

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between items-center bg-black max-w-[100vw]">
      <img className="h-20 w-28 md:w-auto" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex cursor-pointer">
          <select
            className="bg-gray-500 text-white rounded-md me-2 md:me-4 px-1"
            onChange={handleChange}
          >
            {SUPPORTED_LANGUAGE.map((value) => (
              <option value={value.identifier} key={value.identifier}>
                {value.name}
              </option>
            ))}
          </select>
          <button
            className="bg-blue-700 me-4 py-2 px-2 md:px-4 rounded-lg text-white self-center"
            onClick={handleGpt}
          >
            {showGpt
              ? CONTENT.headerBtn.home[lang]
              : CONTENT.headerBtn.gpt[lang]}
          </button>
          <div className="flex" onClick={handleClick}>
            <img
              src={USER_AVTAR}
              className="h-10 pe-4 hidden md:inline-block"
              alt="user-avtar"
            />
            <div className="text-white pt-2 pe-0 md:pe-4 font-bold">
              {CONTENT.singOut[lang]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
