import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";

const MovieList = ({ title, movies }) => {
  const isLoading = !movies || movies.length === 0;

  return (
    <div className="mb-12 px-6">
      <h1 className="text-xl md:text-3xl text-white font-bold py-4 mt-6">{title}</h1>

      {isLoading ? (
        <Shimmer />
      ) : (
        <div className="overflow-x-auto scrollbar-hide mb-4">
          <div className="flex flex-nowrap gap-6">
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
