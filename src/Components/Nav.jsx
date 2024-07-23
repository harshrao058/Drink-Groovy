import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";

import logo from "../../public/logo.png";

const items = ["home", "Product", "About Us", "Blog", "contact us"];

const Nav = () => {
  return (
    <>
      <div className="w-full z-50 fixed flex items-center justify-between lg:px-16 px-8 lg:py-8 py-4   text-white ">
        <div className=" flex items-center gap-16">
          <img src={logo} alt="Logo" className="w-[8vw]" />{" "}
          <div className="flex gap-[4vw] uppercase ">
            {items.map((val, key) => (
              <div
                key={key}
                className="cursor-pointer font-semibold text-[1.2vw]"
              >
                <h1>{val}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-8 ">
          <FiSearch className="text-[2vw] font-bold " />

          <LuShoppingCart className="md:text-[2vw] " />
          <GrFavorite className="md:text-[2vw] " />
          <FaRegUser className="md:text-[1.8vw] " />
        </div>
      </div>
    </>
  );
};

export default Nav;
