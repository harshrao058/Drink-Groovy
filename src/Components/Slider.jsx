import React from "react";
import slide1 from "../../public/slide1.jpg";
import { Link } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";


const Slider = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-between px-16 bg-[#DAF253]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="">
              Made With Mint
              <br /> And <br /> <span className="text-[#33810A]">
                Lemon
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-700  ">
            Groovy Fruit Drink - Lemon
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={slide1} alt="" className="h-full" />
      </div>
    </>
  );
};

export default Slider;
