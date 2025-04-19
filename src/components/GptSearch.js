import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import Footer from "./Footer";

const GPTSearch = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div
        className="relative w-full h-[75vh] md:h-[85vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_URL})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <GptSearchBar />
          </div>
        </div>
      </div>

      <div className="flex-grow px-4 pt-6 md:px-8">
        <GptMovieSuggestions />
      </div>

      <Footer />
    </div>
  );
};

export default GPTSearch;
