import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWesternMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useWesternMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWesternMovies();
  }, []);

  const getWesternMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=37",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addWesternMovies(json.results));
  };
};

export default useWesternMovies;
