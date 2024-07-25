import { VelocityScroll } from "./magicui/scroll-based-velocity";
import React from "react";

const LeftToRightMarquee = () => {
  return (
    <>
      <div className="my-8"> 
      <VelocityScroll
        text="Jucies Served with Love | 100% natural fruit juice | No added colors | no preservatives | "
        default_velocity={1}
        className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
      </div>
    </>
  );
};

export default LeftToRightMarquee;
