import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import anarcard from "../../public/anarcard.png";
import lemoncard from "../../public/lemoncard.png";
import lycheecard from "../../public/lycheecard.png";
import mixcard from "../../public/mixcard.png";
import guavacard from "../../public/guavacard.png";
import mangocard from "../../public/mangocard.png";

const products = [
  {
    image: anarcard,
    backgroundColor: "ED6070",
    price: "10.00",
    desc: "Anar Juice ",
  },
  {
    image: lemoncard,
    backgroundColor: "E5E759",
    price: "10.00",
    desc: "Lemon Mix Juice  ",
  },
  {
    image: lycheecard,
    backgroundColor: "F8C0D6",
    price: "10.00",
    desc: "Lychee Juice ",
  },
  {
    image: mixcard,
    backgroundColor: "F79647",
    price: "10.00",
    desc: "Mix Fruite Juice ",
  },
  {
    image: guavacard,
    backgroundColor: "A0CF6E",
    price: "10.00",
    desc: "Guava Juice",
  },
  {
    image: mangocard,
    backgroundColor: "FED53F",
    price: "10.00",
    desc: "Mango Juice  ",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(products.length / 3) - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === Math.ceil(products.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden pt-24">
      <h1 className="text-center font-semibold text-4xl">Our Fruitful Products</h1>
      <div className="relative">
        <button
          className="absolute top-1/2 left-4  bg-white p-2 rounded-full shadow-lg z-10"
          onClick={goToPrevious}
        >
          <FaArrowLeft />
        </button>
        <div className="flex px-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className=" p-2">
                <ProductCard
                  image={product.image}
                  backgroundColor={product.backgroundColor}
                  price={product.price}
                  desc={product.desc}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          onClick={goToNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
