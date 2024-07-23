import React from "react";
import slide1 from "../../public/slide1.jpg";
const Slider = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-between px-16 bg-[#DAF253]">
        <div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-9xl text-white  ">
            <h1 className="">Drink</h1>
          </div>
          <div className="font-oswald font-<weight>  font-semibold uppercase text-9xl text-white  ">
            Groovy
          </div>
        </div>
        <img src={slide1} alt="" className="h-full" />
      </div>
    </>
  );
};

export default Slider;
