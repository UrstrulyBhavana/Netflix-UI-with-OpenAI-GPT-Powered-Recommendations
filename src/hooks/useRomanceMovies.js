import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addRomanceMovies } from "../utils/moviesSlice";

const useRomanceMovies = () => {
  const dispatch = useDispatch();
  const romanceMovies = useSelector((store) => store.movies.romanceMovies);

  const getRomanceMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=10749&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addRomanceMovies(json.results));
  };

  useEffect(() => {
    if (!romanceMovies) getRomanceMovies();
  }, []);
};

export default useRomanceMovies;
