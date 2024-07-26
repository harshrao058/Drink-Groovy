// src/components/StickyBackground.jsx
import React, { useState, useEffect } from "react";
import { GoPlay } from "react-icons/go";

const images = [
  "https://www.drinkgroovy.com/wp-content/themes/Groovy/images/About/Group%20170.png",
  "https://www.drinkgroovy.com/wp-content/themes/Groovy/images/About/Group%20171.png",
  "https://www.drinkgroovy.com/wp-content/themes/Groovy/images/About/Group%20175.png",
];

const StickyBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden px-16 ">
      <div
        className="relative h-screen bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <p className="text-white text-xl uppercase tracking-widest">Welcome To</p>
          <p className="text-white text-4xl">a fruitful journey</p>
          <p className="text-white px-64 py-8 text-center">
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
