import React from 'react';
import slide3 from '../../public/slide3.jpg';
import { LuShoppingBag } from "react-icons/lu";

const SliderThree = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between px-16 bg-[#77D479]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="">
              Made With Fresh
              <br /> & Ripe <br /> <span className="text-[#1F7D2F]">
                Guavas
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-700  ">
            Groovy Fruit Drink - Guava
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white hover:bg-white hover:text-gray-700 transition-all ease-in-out px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={slide3} alt="" className="h-full" />
      </div>
  );
};

export default SliderThree;
