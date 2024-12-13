import { CONTENT } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import gptResult from "../utils/gptResult";
import { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieCard from "./MovieCard";

const SearchGPT = () => {
  const lang = useSelector((store) => store.userPreference.language);
  const moviesLists = useSelector((store) => store.gpt.searchMovies);
  const [searchQuery, setSearchQuery] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  useFetchMovies(searchQuery);
  const onsubmit = async (data) => {
    const movieResults = await gptResult(data?.searchValue);
    const resultArray = movieResults.split(", ");
    setSearchQuery(resultArray);
  };

  return (
    <div className="pt-16 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')] bg-cover bg-center min-h-screen">
      <div className="md:flex md:items-start md:justify-center">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="bg-black p-8 rounded-md md:flex sm:w-full md:w-1/2"
        >
          <div className="w-full">
            <input
              type="text"
              className="h-10 rounded-sm ps-3 w-full md:w-[90%]"
              placeholder={CONTENT.placeholderText[lang]}
              {...register("searchValue", {
                required: CONTENT.errorValue[lang],
              })}
            />
            {errors.searchValue && (
              <div className="text-red-700 pt-2">
                {errors.searchValue.message}
              </div>
            )}
          </div>
          <div className="sm:w-full md:w-auto mt-4 md:mt-0">
            <button className="bg-red-600 text-white py-2 px-4 w-full rounded-lg">
              {CONTENT.searchBtn[lang]}
            </button>
          </div>
        </form>
      </div>
      {moviesLists.length &&
        moviesLists.map((arr, index) => (
          <div className="bg-black text-white mt-3 px-3" key={index}>
            <h2 className="text-2xl font-bold pb-4">
              {searchQuery && searchQuery[index]}
            </h2>
            <div className="flex gap-5 overflow-x-scroll scrollbar-none">
              {arr.map(
                (value) =>
                  value.poster_path && (
                    <MovieCard posterPath={value.poster_path} key={value.id} />
                  )
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default SearchGPT;
