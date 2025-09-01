import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const userInput = (searchText.current?.value || "").trim();
    if (!userInput) return;

    const gptQuery =
      `Act as a Movie Recommendation system and suggest some movies for the query: ${userInput}. ` +
      `Only give me names of 5 movies, comma separated like the example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      const gptMovies =
        (gptResults?.choices?.[0]?.message?.content || "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);

      if (!gptMovies.length) {
        await Swal.fire({
          icon: "warning",
          title: "No results",
          text: "GPT didn’t return movie names. Try a different query.",
          confirmButtonText: "OK",
          background: "#111827",    
          color: "#e5e7eb",
          confirmButtonColor: "#a855f7",
          scrollbarPadding: false,
        });
        return;
      }

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    } catch (err) {
      console.error(err);
      const isAuth =
        err?.status === 401 ||
        err?.response?.status === 401 ||
        /api key|unauthorized|invalid/i.test(err?.message || "");

      if (isAuth) {
        Swal.fire({
          icon: "info",
          title: "GPT Search is disabled",
          html: 'Add your own <b>OpenAI API key</b> to enable this feature.',
          confirmButtonText: "OK",
          background: "#111827", 
          color: "#e5e7eb",      
          confirmButtonColor: "#a855f7", 
          scrollbarPadding: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "GPT Search unavailable",
          text: "Please try again later.",
          confirmButtonText: "OK",
          background: "#111827",
          color: "#e5e7eb",
          confirmButtonColor: "#a855f7",
          scrollbarPadding: false,
        });
      }
    } finally {
      if (searchText.current) searchText.current.value = "";
    }
  }

  return (
    <form
      className="w-full grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="w-full sm:col-span-9 md:col-span-10 px-4 py-3 rounded-full text-white placeholder-white text-center bg-gradient-to-r from-purple-600 to-pink-500 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
      />
      <button
        onClick={handleGptSearchClick}
        className="w-full sm:col-span-3 md:col-span-2 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-3 rounded-full shadow-lg transition duration-300"
      >
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
