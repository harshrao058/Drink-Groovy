// src/components/StickyBackground.jsx
import React from "react";

const StickyBackground = () => {
  return (
    <div className="relative h-[75vh] overflow-hidden w-[100vw]">
      <div
        className="sticky top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://embedsocial.com/admin/mediacdn/feed-media/18006/18006077030309004/image_0_large.webp')",
        }}
      ></div>
      <div className="absolute inset-0 px-16 py-8 overflow-y-scroll no-scrollbar bg-opacity-50 bg-gray-800">
        <div className="w-full">
          <div className=" flex w-full items-center justify-center text-6xl font-semibold text-white">
            <h1 classNmae=" ">
              <p>Cheers To New </p>
              <span>Achievements!</span>
            </h1>
          </div>
          <div className="px-80 text-center text-4xl text-white py-8">
            <p >
              Immerse yourself in a world of vibrant flavors with Groovy Drinks.
              From refreshing classics to innovative new blends, our beverages
              are crafted to delight your taste buds and elevate any occasion.
              Whether you’re unwinding after a long day or celebrating with
              friends, each sip of Groovy Drinks promises an unforgettable
              experience, turning every moment into a joyful celebration of
              taste and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBackground;
