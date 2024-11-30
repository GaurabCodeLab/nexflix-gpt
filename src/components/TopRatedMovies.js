import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const TopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);
  useTopRatedMovies();
  return (
    <div className="flex gap-5 overflow-x-scroll scrollbar-none">
      {topRatedMovies.length &&
        topRatedMovies.map((value) => (
          <MovieCard key={value.id} posterPath={value.poster_path} />
        ))}
    </div>
  );
};

export default TopRatedMovies;
