import React from "react";

import Carousel from "../Components/Carousel";
import PageTwo from "../Components/PageTwo";
import Marquee from "../Components/Marquee";
import Working from "../Components/Working";
import Qualities from "../Components/Qualities";
import Features from "../Components/Features.jsx";
import StickyBackground from "../Components/StickyBackground";
import LeftToRightMarquee from "../Components/LeftToRightMarquee";
import Products from "../Components/Products";
const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <PageTwo />
        {/* <Carousel /> */}

        <Working />
        <StickyBackground />

        <Features />
        {/* <Qualities /> */}
        {/* <Products /> */}
        <LeftToRightMarquee />


        <Marquee />
      </div>
    </>
  );
};

export default Home;
