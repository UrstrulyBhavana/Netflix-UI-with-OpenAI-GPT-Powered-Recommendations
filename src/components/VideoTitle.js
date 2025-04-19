const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[25%] md:pt-[15%] px-4 md:px-16 text-white w-full max-w-[60%] mb-8 md:mb-6">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">{title}</h1>
      <p className="text-white text-lg md:text-lg w-full max-w-2xl mt-4 line-clamp-3 drop-shadow-md">{overview}</p>

      <div className="flex gap-4 mt-3">
        <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-md hover:bg-opacity-80 shadow-md hover:scale-105 transition-transform duration-200">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white px-6 py-2 text-sm font-semibold rounded-md hover:bg-opacity-80 shadow-md hover:scale-105 transition-transform duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;

