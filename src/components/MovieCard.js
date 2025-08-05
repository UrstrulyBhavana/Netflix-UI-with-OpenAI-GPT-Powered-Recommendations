import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const { poster_path, title, name, overview, release_date } = movie;

  if (!poster_path) return null;

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        data-aos="fade-up"
        className="min-w-[120px] sm:min-w-[160px] md:min-w-[200px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:hover:z-[5]"
      // className="min-w-[150px] md:min-w-[200px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:z-20"
      >

        <img
          src={IMG_CDN_URL + poster_path}
          alt={title || name}
          className="w-full h-auto rounded-lg object-cover shadow-md hover:brightness-110 hover:shadow-xl hover:ring-2 hover:ring-white/70 transition"
        // className="rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-xl hover:ring-2 hover:ring-white/70"
        />
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-[999] flex items-center justify-center px-2"
          onClick={() => setShowModal(false)} // Clicking outside closes
        >
          <div
            className="relative bg-white text-black w-full max-w-xs sm:max-w-md md:max-w-2xl rounded-xl p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicked inside
          >
            <button
              className="absolute top-3 right-4 text-3xl font-bold text-gray-700 hover:text-red-600 z-[1000]"
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              &times;
            </button>

            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">{title || name}</h2>
            {/* <div className="w-1/2 mx-auto h-[1px] bg-gray-300 mb-3" /> */}

            {release_date && (
              <p className="text-xs sm:text-sm text-gray-500 mb-4 text-center">
                Release Date: {release_date}
              </p>
            )}

            <img
              src={IMG_CDN_URL + poster_path}
              alt={title || name}
              className="mx-auto w-full max-w-[180px] sm:max-w-[220px] rounded-lg mb-4"
            />

            <p className="text-gray-800 text-sm sm:text-base leading-relaxed px-2 text-justify">
              {overview || "No description available."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;






