import usePopularMovies from "../hooks/usePopularMovies";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const popularMoviesList = useSelector((store) => store.movie.popularMovies);

  usePopularMovies();
  return (
    <div className="flex gap-5 overflow-x-scroll scrollbar-none">
      {popularMoviesList.length &&
        popularMoviesList.map((value) => (
          <MovieCard key={value.id} posterPath={value.poster_path} />
        ))}
    </div>
  );
};

export default PopularMovies;
