import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full mt-6  md:h-[300px]  bg-black ">
      <div className="p-4 ">
        <div className="p-5 flex flex-col md:flex-row  justify-around items-center">
          <ul className="mb-5 flex flex-col items-center">
            <li className="text-white mt-2 pb-2 text-xl sm:text-2xl font-bold">
              Get in Touch
            </li>
            <li className="text-white mt-2 pb-2 ">+91 1234567890</li>
            <li className="text-white mt-2 pb-2">imdb@gmail.com</li>
            <li className="text-white mt-2 pb-2">Help</li>
          </ul>
          <ul className="mb-5 text-center">
            <li className="text-white mt-2 pb-2 text-xl sm:text-2xl font-bold">
              Quick Links
            </li>
            <NavLink to="/">
              <li className="text-white mt-2 pb-2">Movie</li>
            </NavLink>

            <NavLink to="/fav">
              <li className="text-white mt-2 pb-2">Favourites</li>
            </NavLink>
            <li className="text-white mt-2 pb-2">Contact</li>
          </ul>
          <ul className="mb-5 text-center">
            <li className="text-white mt-2 pb-2 text-xl sm:text-2xl font-bold">
              Follow Us
            </li>
            <li className="text-white mt-2 pb-2">LinkedIn</li>
            <li className="text-white mt-2 pb-2">Instagram</li>
            <li className="text-white mt-2 pb-2">FaceBook</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
