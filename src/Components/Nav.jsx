import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";

import logo from "../../public/logo.png";

const items = ["home", "About", "shop", "media", "contact"];

const Nav = () => {
  return (
    <>
      <div className="w-full z-50 fixed   text-white flex justify-between px-20 h-28 items-center   ">
        <div className="w-1/4">
          <img src={logo} alt="Logo" className="w-28" />{" "}
        </div>
        <div className="flex flex-col w-1/2 justify-center gap-2 items-center text-lg">
          {" "}
          <div className="flex gap-16 uppercase ">
            {items.map((val, key) => (
              <div key={key} className="cursor-pointer font-semibold s">
                <h1>{val}</h1>
              </div>
            ))}
          </div>
        </div>
        <div className="text-4xl w-1/4 flex items-center justify-end gap-8">
          <FiSearch className="text-3xl font-bold" />

          <LuShoppingCart className="text-3xl"/>
          <GrFavorite className="text-3xl" />
          <FaRegUser className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Nav;
