import { CONTENT } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchGPT = () => {
  const lang = useSelector((store) => store.userPreference.language);
  console.log("lang hai", lang);
  return (
    <div className="pt-16 flex items-start justify-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')] bg-cover bg-center h-screen">
      <div className="bg-black p-8 rounded-md w-1/2">
        <input
          type="text"
          className="h-10 rounded-sm ps-3 w-[80%]"
          placeholder={CONTENT.placeholderText[lang]}
        />
        <button className="bg-red-600 text-white ms-4 py-2 px-4 rounded-lg">
          {CONTENT.searchBtn[lang]}
        </button>
      </div>
    </div>
  );
};

export default SearchGPT;
