import React from 'react';
import slide4 from '../../public/slide4.jpg';
import { LuShoppingBag } from "react-icons/lu";

const SliderFour = () => {
  return (
    <div className="h-screen w-full flex items-center justify-between px-16 bg-[#F5D4DF]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-7xl text-white  ">
            <h1 className="">
              Made With Sweet
              <br /> & puply <br /> <span className="text-[#DD89AC]">
                Lychees
              </span>{" "}
            </h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-4xl text-gray-700  ">
            Groovy Fruit Drink - Lychees
          </div>
          <div className="w flex items-center uppercase mt-8">
            <h1 className="bg-gray-700 text-white px-4 text-xl py-3 w-auto flex items-center gap-2">
              Shop Now <LuShoppingBag />

            </h1>
          </div>
        </div>
        <img src={slide4} alt="" className="h-full" />
      </div>
  );
};

export default SliderFour;
