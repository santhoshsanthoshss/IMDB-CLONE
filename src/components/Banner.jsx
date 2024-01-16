import React from "react";
import ReactDOM from "react-dom";
import "../css/StyleBanner.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Logo from "../images/Banner.jpg";
const Banner = () => {
  return (
    <div className="h-[500px] object-cover sm">
      <Carousel autoPlay interval={2000} infiniteLoop transitionTime={1000}>
        <div className="h-[500px]">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/et00382276-rafmmbqrsu-landscape.jpg"
            className="w-full h-full sm:object-cover"
            alt=""
          />
          <p className="legend font-bold">Mission</p>
        </div>
        <div className="h-[500px]">
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
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
