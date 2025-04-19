const Shimmer = () => {
    return (
      <div className="flex flex-wrap gap-6 justify-center px-4 py-8">
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="w-[150px] md:w-[200px] h-[300px] bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  