import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Pagination from "./Pagination";
const Movies = () => {
  // pagination
  const [pageNum, setpageNum] = useState(1);
  const prev = () => {
    if (pageNum > 1) {
      setpageNum(pageNum - 1);
    }
  };

  const nex = () => {
    setpageNum(pageNum + 1);
  };

  // Api fetching
  const [movies, setmovie] = useState([]);
  const API =
    "https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=" +
    pageNum;
  const fetchData = async (url) => {
    const {
      data: { results },
    } = await axios.get(url);
    setmovie(results);
  };
  useEffect(() => {
    fetchData(API);
  }, [pageNum]);

  // show emoji
  // hover
  const [hovered, sethovered] = useState("");
  const showEmoji = (id) => {
    sethovered(id);
  };

  const hideEmoji = (id) => {
    sethovered("");
  };

  // cross emoji
  const [favourites, setfavourites] = useState([]);

  // add and remove emoji
  const addEmoji = (id) => {
    const newArr = [...favourites, id];
    setfavourites(newArr);
  };

  const removeEmoji = (id) => {
    const filtereditem = favourites.filter((ele) => {
      return ele !== id;
    });
    setfavourites(filtereditem);
  };
  return (
    <div className="relative bottom-28  md:mt-52 ">
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
                onMouseOver={() => {
                  showEmoji(movie.id);
                }}
                onMouseLeave={() => {
                  hideEmoji(movie.id);
                }}
                key={movie.id}
                className="bg-center bg-cover w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative"
                style={{
                  backgroundImage: `url(
                https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path})`,
                }}
              >
                <div
                  className=" bg-white rounded-xl absolute p-2 top-2 right-2"
                  style={{ display: hovered === movie.id ? "block" : "none" }}
                >
                  {favourites.includes(movie.id) === false ? (
                    <div
                      className="text-xl cursor-pointer"
                      onClick={() => {
                        addEmoji(movie.id);
                      }}
                    >
                      😍
                    </div>
                  ) : (
                    <div
                      className="text-xl cursor-pointer"
                      onClick={() => {
                        removeEmoji(movie.id);
                      }}
                    >
                      ❌
                    </div>
                  )}
                </div>
                <div className="bg-gray-900 font-bold text-white w-full bg-opacity-60 py-2 text-center rounded-xl">
                  {movie.title || movie.name}
                </div>
              </div>
            );
          })
        )}
      </div>
      <Pagination
        pageNum={pageNum}
        prev={prev}
        nex={nex}
        setpageNum={setpageNum}
      />
    </div>
  );
};

export default Movies;
