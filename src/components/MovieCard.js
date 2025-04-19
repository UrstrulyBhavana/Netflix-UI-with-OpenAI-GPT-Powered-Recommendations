import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const { poster_path, title, name, overview, release_date } = movie;

  if (!poster_path) return null;

  return (
    <>

      <div
        onClick={() => setShowModal(true)}
        data-aos="fade-up"
        className="min-w-[150px] md:min-w-[200px] cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:z-20"
      >

        <img
          src={IMG_CDN_URL + poster_path}
          alt={title || name}
          className="rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:shadow-xl hover:ring-2 hover:ring-white/70"
        />
      </div>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white text-black w-full max-w-2xl rounded-xl p-6 shadow-xl max-h-[90vh] overflow-y-auto animate-fade"
          >

            <button
              onClick={() => setShowModal(false)}
              title="Close"
              className="absolute top-3 right-4 text-3xl font-bold text-gray-700 hover:text-red-500"
              >
              &times;
            </button>


            <h2 className="text-2xl font-bold mb-1 text-center">{title || name}</h2>
            <div className="w-1/2 mx-auto h-[1px] bg-gray-300 mb-3" />


            {release_date && (
              <p className="text-sm text-gray-500 mb-4 text-center">
                Release Date: {release_date}
              </p>
            )}

            <img
              src={IMG_CDN_URL + poster_path}
              alt={title || name}
              className="mx-auto w-full max-w-60 rounded-lg drop-shadow-md mb-4"
            />

            <p className="text-gray-800 leading-relaxed text-justify px-2">
              {overview || "No description available."}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;






