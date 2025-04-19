import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addThrillerMovies } from "../utils/moviesSlice";

const useThrillerMovies = () => {
  const dispatch = useDispatch();
  const thrillerMovies = useSelector((store) => store.movies.thrillerMovies);

  const getThrillerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=53&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addThrillerMovies(json.results));
  };

  useEffect(() => {
    if (!thrillerMovies) getThrillerMovies();
  }, []);
};

export default useThrillerMovies;
