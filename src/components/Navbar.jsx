import React from "react";
import Logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" py-4 border flex items-center flex-wrap gap-4  md:gap-5">
      <img src={Logo} alt="" className="w-24  object-cover" />
      <NavLink
        to="/"
        className="font-bold text-2xl  text-blue-400 object-cover"
      >
        Movies
      </NavLink>
      <NavLink
        to="/fav"
        className="font-bold text-2xl  text-blue-400  object-cover"
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navbar;
