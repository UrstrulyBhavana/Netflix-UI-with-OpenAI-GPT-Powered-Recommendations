import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addActionMovies } from "../utils/moviesSlice";

const useActionMovies = () => {
  const dispatch = useDispatch();
  const actionMovies = useSelector((store) => store.movies.actionMovies);

  const getActionMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addActionMovies(json.results));
  };

  useEffect(() => {
    if (!actionMovies) getActionMovies();
  }, []);
};

export default useActionMovies;
