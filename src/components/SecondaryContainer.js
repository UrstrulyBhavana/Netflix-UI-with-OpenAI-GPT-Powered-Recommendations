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

  const sections = [
    { title: "Animation",    movies: animationMovies },
    { title: "Thriller",     movies: thrillerMovies },
    { title: "Fantasy",      movies: fantasyMovies },
    { title: "Mystery",      movies: mysteryMovies },
    { title: "Adventure",    movies: adventureMovies },
    { title: "Horror",       movies: horrorMovies },
    { title: "Top Rated",    movies: topRatedMovies },
    { title: "Popular",      movies: popularMovies },
    { title: "Sci-Fi",       movies: sciFiMovies },
    { title: "Now Playing",  movies: nowPlayingMovies },
    { title: "Western",      movies: westernMovies },
    { title: "Upcoming",     movies: upcomingMovies },
  ];

  return (
    <div className="bg-black">
      <div className="relative z-20 mt-12 px-4 sm:px-6 md:px-12 space-y-12">
        {sections.map(({ title, movies }) => (
          <MovieList key={title} title={title} movies={movies} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
