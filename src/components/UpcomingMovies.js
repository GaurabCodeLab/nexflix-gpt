import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const UpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);
  useUpcomingMovies();
  return (
    <div className="flex gap-5 overflow-x-scroll scrollbar-none">
      {upcomingMovies.length &&
        upcomingMovies.map((value) => (
          <MovieCard key={value.id} posterPath={value.poster_path} />
        ))}
    </div>
  );
};

export default UpcomingMovies;
