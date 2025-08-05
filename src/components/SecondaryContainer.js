import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {
    animationMovies,
    thrillerMovies,
    fantasyMovies,
    mysteryMovies,
    adventureMovies,
    horrorMovies,
    topRatedMovies,
    sciFiMovies,
    popularMovies,
    nowPlayingMovies,
    westernMovies,
    upcomingMovies,
  } = useSelector((store) => store.movies);
  
  return (
    <div className="bg-black">
      <div className="relative z-20 mt-12 px-4 sm:px-6 md:px-12 space-y-12">
        {animationMovies?.length > 0 && (
          <MovieList title="Animation" movies={animationMovies} />
        )}
        {thrillerMovies?.length > 0 && (
          <MovieList title="Thriller" movies={thrillerMovies} />
        )}
        {fantasyMovies?.length > 0 && (
          <MovieList title="Fantasy" movies={fantasyMovies} />
        )}
        {mysteryMovies?.length > 0 && (
          <MovieList title="Mystery" movies={mysteryMovies} />
        )}
        {adventureMovies?.length > 0 && (
          <MovieList title="Adventure" movies={adventureMovies} />
        )}
        {horrorMovies?.length > 0 && (
          <MovieList title="Horror" movies={horrorMovies} />
        )}
        {topRatedMovies?.length > 0 && (
          <MovieList title="Top Rated" movies={topRatedMovies} />
        )}
        {popularMovies?.length > 0 && (
          <MovieList title="Popular" movies={popularMovies} />
        )}
        {sciFiMovies?.length > 0 && (
          <MovieList title="Sci-Fi" movies={sciFiMovies} />
        )}
        {nowPlayingMovies?.length > 0 && (
          <MovieList title="Now Playing" movies={nowPlayingMovies} />
        )}
        {westernMovies?.length > 0 && (
          <MovieList title="Western" movies={westernMovies} />
        )}
        {upcomingMovies?.length > 0 && (
          <MovieList title="Upcoming" movies={upcomingMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;


