import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../css/StyleBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Logo from "../images/Banner.jpg";
import axios from "axios";
import Loader from "./Loader";
const Banner = () => {
  const [bannerMovie, setbannerMovie] = useState("");
  const [bannerMovie1, setbannerMovie1] = useState("");
  const [bannerMovie2, setbannerMovie2] = useState("");

  // Api fetching
  // slider0
  const API =
    "https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38";
  const getData = async (url) => {
    let {
      data: { results },
    } = await axios.get(url);
    setbannerMovie(results[8]);
  };
  useEffect(() => {
    getData(API);
  }, []);

  // slider1
  const getData1 = async (url) => {
    let {
      data: { results },
    } = await axios.get(url);
    setbannerMovie1(results[1]);
  };
  useEffect(() => {
    getData1(API);
  }, []);

  // slider2
  const getData2 = async (url) => {
    let {
      data: { results },
    } = await axios.get(url);
    setbannerMovie2(results[4]);
  };
  useEffect(() => {
    getData2(API);
  }, []);
  return (
    <>
      {bannerMovie === "" ? (
        <Loader />
      ) : (
        <div className="h-[500px] object-cover">
          <Carousel autoPlay interval={2000} infiniteLoop transitionTime={1000}>
            <div
              className={`h-[40vh] md:h-[75vh] bg-cover bg-center flex items-end`}
              style={{
                backgroundImage: `url(
              https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie.backdrop_path})`,
              }}
            >
              <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full">
                {bannerMovie.name || bannerMovie.title}
              </div>
            </div>
            <div
              className={`h-[40vh] md:h-[75vh] bg-cover bg-center flex items-end`}
              style={{
                backgroundImage: `url(
              https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie1.backdrop_path})`,
              }}
            >
              <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full">
                {bannerMovie1.name || bannerMovie1.title}
              </div>
            </div>

            <div
              className={`h-[40vh] md:h-[75vh] bg-cover bg-center flex items-end`}
              style={{
                backgroundImage: `url(
              https://image.tmdb.org/t/p/original/t/p/original/${bannerMovie2.backdrop_path})`,
              }}
            >
              <div className="text-xl md:text-3xl text-white bg-gray-900 bg-opacity-60 p-4 text-center w-full">
                {bannerMovie2.name || bannerMovie2.title}
              </div>
            </div>
            {/* <div className="h-[500px]">
              <img
                src="https://i0.wp.com/goldandhra.com/wp-content/uploads/2024/01/Sivakarthikeyans-Ayalan-Movie-Review.jpg?fit=780%2C396&ssl=1"
                alt=""
                className="w-full h-full  "
              />
              <p className="legend font-bold">Ayaiaan</p>
            </div>
            <div className="h-[500px] ">
              <img
                src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101818853/101818853.jpg"
                alt=""
                className="w-full h-full"
              />
              <p className="legend font-bold">Merry Christmas</p>
            </div> */}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Banner;
