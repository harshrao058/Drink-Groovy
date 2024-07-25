import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import logo from "../../public/logo.png";

const Nav = () => {
  return (
    <div className="w-full z-50 fixed flex items-center justify-between lg:px-16 px-8 lg:py-8 py-4 h-24  text-black">
      <div className="flex items-center gap-16">
        <img src={logo} alt="Logo" className="w-[8vw]" />
        <div className="flex gap-[4vw] uppercase">
          <NavLink
            to="/"
            className="cursor-pointer font-semibold text-sm text-white bg-zinc-800 px-2 py-1 hover:text-gray-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="cursor-pointer font-semibold text-sm hover:text-gray-400"
          >
            Products
          </NavLink>
          <NavLink
            to="/"
            className="cursor-pointer font-semibold text-sm hover:text-gray-400"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className="cursor-pointer font-semibold text-sm hover:text-gray-400"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="cursor-pointer font-semibold text-sm hover:text-gray-400"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <FiSearch className="text-xl font-bold" />
        <LuShoppingCart className="text-xl" />
        <GrFavorite className="text-xl" />
        <div className=" bg-zinc-800 p-2 text-white rounded-full">
          <FaRegUser className="text-base" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
