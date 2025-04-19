import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSciFiMovies } from "../utils/moviesSlice";

const useSciFiMovies = () => {
  const dispatch = useDispatch();
  const sciFiMovies = useSelector((store) => store.movies.sciFiMovies);

  const getSciFiMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=878&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSciFiMovies(json.results));
  };

  useEffect(() => {
    if (!sciFiMovies) getSciFiMovies();
  }, []);
};

export default useSciFiMovies;
