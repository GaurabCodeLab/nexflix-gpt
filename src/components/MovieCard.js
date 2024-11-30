import { POSTER_BASE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <img
      src={POSTER_BASE_URL + posterPath}
      className="rounded-lg cursor-pointer hover:scale-110 transition-all"
    />
  );
};

export default MovieCard;
