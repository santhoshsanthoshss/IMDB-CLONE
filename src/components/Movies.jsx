import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
const Movies = () => {
  // Api fetching
  const [movies, setmovie] = useState([]);
  const API =
    "https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38";
  const fetchData = async (url) => {
    const {
      data: { results },
    } = await axios.get(url);
    setmovie(results);
  };
  useEffect(() => {
    fetchData(API);
  });
  return (
    <div className="relative bottom-48 md:mt-72">
      <div className="mb-10 font-bold text-2xl md:text-3xl text-center">
        Trending Movie
      </div>
      <div className="flex flex-wrap justify-center">
        {movies === 0 ? (
          <Loader />
        ) : (
          movies.map((movie, ind) => {
            return (
              <div
                key={movie.id}
                className="bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 duration-300 flex items-end "
                style={{
                  backgroundImage: `url(
                https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`,
                }}
              >
                <div className="bg-gray-900 font-bold text-white w-full bg-opacity-60 py-2 text-center rounded-xl">
                  {movie.title || movie.name}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movies;
