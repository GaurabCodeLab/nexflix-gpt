import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import useFeatureMovieVideos from "../hooks/useFeatureMovieVideos";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import SecondaryContainer from "./Secondary";

const Browse = () => {
  const movieVideos = useSelector((store) => store.movie?.featureMovieVideos);
  const featureMovie = useSelector((store) => store?.movie?.movies);
  const [trailerId, setTrailerId] = useState(null);
  useNowPlaying();
  useFeatureMovieVideos();

  useEffect(() => {
    if (movieVideos.length) {
      setTrailerId(
        movieVideos?.find((value) => value?.type === "Trailer")?.key
      );
    }
  }, [movieVideos]);

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="absolute text-white w-1/3 top-1/2 translate-y-[-50%] ps-8">
          <h1 className="text-3xl font-bold">{featureMovie[0]?.title}</h1>
          <p>{featureMovie[0]?.overview}</p>
          <div className="flex gap-4 mt-6">
            <button className="bg-white text-black py-2 px-10 rounded-lg flex">
              <div className="self-center me-2">
                <FaPlay />
              </div>
              Play
            </button>
            <button className="bg-gray-500 py-2 px-10 rounded-lg flex">
              <div className="self-center me-2 text-lg">
                <IoIosInformationCircleOutline />
              </div>
              More Info
            </button>
          </div>
        </div>
        <iframe
          className="w-screen aspect-video bg-white"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1`}
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
