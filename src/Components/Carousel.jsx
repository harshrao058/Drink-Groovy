import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";

import lemon from "../../public/lemon.png";
import guava from "../../public/guava.png";
import lychee from "../../public/lychee.png";
import mango from "../../public/mango.png";
import mix from "../../public/mix.png";
const images = [lemon, guava, lychee, mango, mix];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden z-1 ">
      <div>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-2"
        >
          <MdOutlineKeyboardArrowLeft size={60} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white p-2"
        >
          <MdOutlineKeyboardArrowRight size={60} />
        </button>
      </div>
     <div className="z-2 absolute bottom-28 right-0"> 
     <h1 className="   text-black uppercase bg-blend-screen bg-white px-4 py-4 font-semibold flex items-center gap-2">
        Explore Products <AiOutlineProduct size={20} />

      </h1>
      <h1 className="  text-black uppercase bg-blend-screen bg-white px-4 py-4 font-semibold flex items-center gap-2">
        Know About Us <FcAbout size={20} />

      </h1>
     </div>
      
    </div>
  );
};

export default Carousel;
