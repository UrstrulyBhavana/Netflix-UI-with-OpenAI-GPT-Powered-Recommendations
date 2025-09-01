import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col overflow-x-hidden">
      <div
        className="relative w-full hero-h hero-h-md bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <GptSearchBar />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-12 pt-6 pb-10">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
