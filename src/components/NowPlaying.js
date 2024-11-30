import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const NowPlaying = () => {
  const nowPlayingMoviesList = useSelector((store) => store.movie.movies);
  return (
    <div className="flex gap-5 overflow-x-scroll scrollbar-none">
      {nowPlayingMoviesList.length &&
        nowPlayingMoviesList.map((value) => (
          <MovieCard key={value.id} posterPath={value.poster_path} />
        ))}
    </div>
  );
};

export default NowPlaying;
