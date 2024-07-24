import NumberTicker from "./magicui/number-ticker";
import React from "react";
import { PiCity } from "react-icons/pi";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";

const Working = () => {
  return (
    <>
      <div className="whitespace-pre-wrap w-full  text-3xl font-semibold tracking-tighter text-white bg-green-800 flex itmes-center justify-between px-8 py-4">
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <div className="flex items-center gap-2">
            <h1>Cites</h1>
            <PiCity />
          </div>

          <NumberTicker value={30} className="tracking-tight"/>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <div className="flex items-center gap-2">
            <h1>Happy Customers</h1>
            <RiEmotionHappyLine />
          </div>
          <NumberTicker value={1005626} className="tracking-tight" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <div className="flex items-center gap-2">
            <h1>Partners</h1>
            <FaUsers />
          </div>

          <NumberTicker value={60} color="white" className="tracking-tight" />
        </div>
      </div>
    </>
  );
};

export default Working;
