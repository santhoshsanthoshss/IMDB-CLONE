import React from "react";
import Logo from "../images/logo.jpg";
const Navbar = () => {
  return (
    <div className=" py-4 border flex items-center flex-wrap gap-4  md:gap-5">
      <img src={Logo} alt="" className="w-24  object-cover" />
      <h3 className="font-bold text-2xl  text-blue-400 object-cover">Movies</h3>
      <h3 className="font-bold text-2xl  text-blue-400  object-cover">
        Favourites
      </h3>
    </div>
  );
};

export default Navbar;
