import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((s) => s.gpt || {});

  const names = Array.isArray(movieNames) ? movieNames : [];
  const results = Array.isArray(movieResults) ? movieResults : [];

  if (names.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {names.map((name, i) => (
        <MovieList
          key={`${name}-${i}`}
          title={name}
          movies={Array.isArray(results[i]) ? results[i] : []} />
      ))}

    </div>
  );
};

export default GptMovieSuggestions;
