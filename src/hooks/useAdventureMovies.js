import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addAdventureMovies } from "../utils/moviesSlice";

const useAdventureMovies = () => {
  const dispatch = useDispatch();
  const adventureMovies = useSelector((store) => store.movies.adventureMovies);

  const getAdventureMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=12&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAdventureMovies(json.results));
  };

  useEffect(() => {
    if (!adventureMovies) getAdventureMovies();
  }, []);
};

export default useAdventureMovies;
