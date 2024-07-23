import NumberTicker from "./magicui/number-ticker";
import React from "react";
import { PiCity } from "react-icons/pi";
import { RiEmotionHappyLine } from "react-icons/ri";

const Working = () => {
  return (
    <>
      <div className="whitespace-pre-wrap w-full  text-4xl font-semibold tracking-tighter text-white bg-[#FF6F00] flex itmes-center justify-between p-8">
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <div className="flex items-center gap-2">
            <h1>Cites</h1>
            <PiCity />
          </div>

          <NumberTicker value={30} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <div className="flex items-center gap-2">
            <h1>Happy Customers</h1>
            <RiEmotionHappyLine />
          </div>
          <NumberTicker value={1005626} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-1/3">
          <h1>Partners</h1>
          <NumberTicker value={60} color="white" />
        </div>
      </div>
    </>
  );
};

export default Working;
