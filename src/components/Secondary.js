import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";

const SecondaryContainer = () => {
  return (
    <>
      <div className="bg-black text-white sm:-mt-20 md:-mt-40 px-3">
        <h2 className="text-2xl font-bold pb-4">Now Playing</h2>
        <NowPlaying />
      </div>
      <div className="bg-black text-white pt-8 px-3">
        <h2 className="text-2xl font-bold pb-4">Popular</h2>
        <TopRatedMovies />
      </div>
      <div className="bg-black text-white pt-8 px-3">
        <h2 className="text-2xl font-bold pb-4">Top Rated</h2>
        <PopularMovies />
      </div>
      <div className="bg-black text-white pt-8 px-3">
        <h2 className="text-2xl font-bold pb-4">Upcoming</h2>
        <UpcomingMovies />
      </div>
    </>
  );
};

export default SecondaryContainer;
