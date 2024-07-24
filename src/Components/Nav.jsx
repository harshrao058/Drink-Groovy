import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";


import logo from "../../public/logo.png";

const Nav = () => {
  return (
    <div className="w-full z-50 fixed flex items-center justify-between lg:px-16 px-8 lg:py-8 py-4 h-[15vh] bg-zinc-800 text-white">
      <div className="flex items-center gap-16">
        <img src={logo} alt="Logo" className="w-[8vw]" />
        <div className="flex gap-[4vw] uppercase">
          <NavLink to="/" className="cursor-pointer font-semibold text-[1.2vw] hover:text-gray-400">Home</NavLink>
          <NavLink to="/products" className="cursor-pointer font-semibold text-[1.2vw] hover:text-gray-400">Products</NavLink>
          <NavLink to="/" className="cursor-pointer font-semibold text-[1.2vw] hover:text-gray-400">Blogs</NavLink>
          <NavLink to="/about" className="cursor-pointer font-semibold text-[1.2vw] hover:text-gray-400">About Us</NavLink>
          <NavLink to="/contact" className="cursor-pointer font-semibold text-[1.2vw] hover:text-gray-400">Contact Us</NavLink>
        </div>
      </div>

      <div className="flex gap-8">
        <FiSearch className="text-[2vw] font-bold" />
        <LuShoppingCart className="md:text-[2vw]" />
        <GrFavorite className="md:text-[2vw]" />
        <FaRegUser className="md:text-[1.8vw]" />
      </div>
    </div>
  );
};

export default Nav;
