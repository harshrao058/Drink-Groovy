import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

import logo from "../../public/logo.png";

const items = ["teas", "martinis", "sodas", "ice cream", "yogurt"];

const Nav = () => {
  return (
    <>
      <div className="w-full z-50 fixed  text-white flex justify-between px-20 h-28 items-center ">
        <div>
          <FiSearch className="text-4xl font-bold" />
        </div>
        <div className="flex flex-col justify-center gap-2 items-center text-lg">
          {" "}
          <img src={logo} alt="Logo" className="w-28" />{" "}
          <div className="flex gap-16 uppercase ">
            {items.map((val, key) => (
              <div key={key} className="cursor-pointer font-semibold s">
                <h1>{val}</h1>
              </div>
            ))}
          </div>
        </div>
        <div>
          <LuShoppingCart className="text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Nav;
