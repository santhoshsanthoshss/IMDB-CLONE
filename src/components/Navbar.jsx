import React from "react";
import Logo from "../images/logo.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" border flex items-center space-x-8 pl-12 py-4">
      <NavLink to="/">
        <img src={Logo} alt="" className="w-[50px] md:w-[90px] object-cover" />
      </NavLink>
      <NavLink to="/" className="font-bold text-xl md:text-2xl text-blue-400">
        Movies
      </NavLink>
      <NavLink
        to="/fav"
        className="font-bold text-xl md:text-2xl text-blue-400"
      >
        Favourites
      </NavLink>
    </div>
  );
};

export default Navbar;
