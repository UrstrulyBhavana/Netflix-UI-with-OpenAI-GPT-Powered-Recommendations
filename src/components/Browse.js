import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import useThrillerMovies from "../hooks/useThrillerMovies";
import useSciFiMovies from "../hooks/useSciFiMovies";
import useMysteryMovies from "../hooks/useMysteryMovies";
import useFantasyMovies from "../hooks/useFantasyMovies";
import useAnimationMovies from "../hooks/useAnimationMovies";
import useAdventureMovies from "../hooks/useAdventureMovies";
import useWesternMovies from "../hooks/useWesternMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useAnimationMovies();
  useThrillerMovies();
  useFantasyMovies();
  useMysteryMovies();
  useAdventureMovies();
  useHorrorMovies();
  useTopRatedMovies();
  useSciFiMovies();
  usePopularMovies();
  useNowPlayingMovies();
  useWesternMovies();
  useUpcomingMovies();
  
  return (
  <div className="min-h-screen flex flex-col bg-black text-white">
    <Header />
    
    <div className="flex-grow pt-16 sm:pt-20">
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>

    <Footer />
  </div>
);
};

export default Browse;
