// src/components/StickyBackground.jsx
import React from "react";
import { GoPlay } from "react-icons/go";

const StickyBackground = () => {
  return (
    <div className="relative overflow-hidden ">
      <div
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://embedsocial.com/admin/mediacdn/feed-media/18006/18006077030309004/image_0_large.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <p className="text-white text-xl uppercase tracking-widest ">Welcome To</p>
          <p className="text-white text-4xl">a fruitful journey</p>
          <p className="text-white px-64 py-8 text-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            asperiores ratione iste sint in veritatis similique ab, repellendus,
            deserunt soluta unde, autem vitae reprehenderit eos ex natus quo.
            Optio laudantium, distinctio cum sapiente natus ut similique
            accusamus quaerat corrupti voluptatum reiciendis necessitatibus,
            dolorum, ipsam unde in amet voluptatem illum incidunt.
          </p>
          <a href="">

          <GoPlay size={80} className="text-white font-extralight" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBackground;
