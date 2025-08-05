import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({ title, movies }) => {
  const isLoading = !movies || movies.length === 0;

  return (
    <div className="mb-14 sm:mb-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 pl-1">{title}</h1>

      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="overflow-x-auto scrollbar-hide pb-2">
          <div className="flex gap-4 sm:gap-6">
            {movies.map((movie, index) =>
              movie ? (
                <MovieCard key={movie.id || index} movie={movie} />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
