import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMysteryMovies } from "../utils/moviesSlice";

const useMysteryMovies = () => {
  const dispatch = useDispatch();
  const mysteryMovies = useSelector((store) => store.movies.mysteryMovies);

  const getMysteryMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=9648&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMysteryMovies(json.results));
  };

  useEffect(() => {
    if (!mysteryMovies) getMysteryMovies();
  }, []);
};

export default useMysteryMovies;
