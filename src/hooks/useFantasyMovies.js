import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addFantasyMovies } from "../utils/moviesSlice";

const useFantasyMovies = () => {
  const dispatch = useDispatch();
  const fantasyMovies = useSelector((store) => store.movies.fantasyMovies);

  const getFantasyMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=14&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addFantasyMovies(json.results));
  };

  useEffect(() => {
    if (!fantasyMovies) getFantasyMovies();
  }, []);
};

export default useFantasyMovies;
