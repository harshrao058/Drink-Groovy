import React, { useEffect, useRef } from 'react';
import slide4 from '../../public/slide4.jpg';
import { LuShoppingBag } from "react-icons/lu";
import gsap from 'gsap';

const SliderFour = () => {
  const textRef = useRef();
  const subTextRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.from(textRef.current, { 
      duration: 1, 
      y: -50, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 0.5 
    });
    gsap.from(subTextRef.current, { 
      duration: 1, 
      y: 50, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 1 
    });
    gsap.from(buttonRef.current, { 
      duration: 1, 
      scale: 0.5, 
      opacity: 0, 
      ease: 'back.out(1.7)', 
      delay: 1.5 
    });
    gsap.from(imageRef.current, { 
      duration: 1.5, 
      x: 100, 
      opacity: 0, 
      ease: 'power3.out', 
      delay: 0.5 
    });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-[#F5D4DF]">
      <div className="text-center md:text-left mb-8 md:mb-0">
        <div ref={textRef} className="font-oswald font-semibold uppercase text-4xl md:text-7xl text-white">
          <h1>
            Made With Sweet
            <br /> & puply <br /> <span className="text-[#DD89AC]">
              Lychees
            </span>
          </h1>
        </div>
        <div ref={subTextRef} className="font-oswald font-semibold uppercase text-xl md:text-4xl text-gray-700 mt-4 md:mt-0">
          Groovy Fruit Drink - Lychees
        </div>
        <div ref={buttonRef} className="flex justify-center md:justify-start uppercase mt-8">
          <h1 className="bg-gray-700 text-white px-4 text-lg md:text-xl py-3 w-auto flex items-center gap-2">
            Shop Now <LuShoppingBag />
          </h1>
        </div>
      </div>
      <img ref={imageRef} src={slide4} alt="" className="h-64 md:h-full" />
    </div>
  );
};

export default SliderFour;
