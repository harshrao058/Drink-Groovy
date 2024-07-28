import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import anarcard from "../../public/anarcard.png";
import lemoncard from "../../public/lemoncard.png";
import lycheecard from "../../public/lycheecard.png";
import mixcard from "../../public/mixcard.png";
import guavacard from "../../public/guavacard.png";
import mangocard from "../../public/mangocard.png";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import p4 from "../../public/p4.png";
import p6 from "../../public/p6.png";
import p7 from "../../public/p7.png";

const products = [
  {
    image: p1,
    backgroundColor: "FED53F",
    price: "10.00",
    desc: "Mango Juice",
  },
  
  {
    image: lemoncard,
    backgroundColor: "E5E759",
    price: "10.00",
    desc: "Lemon Mix Juice",
  },
  {
    image: lycheecard,
    backgroundColor: "F8C0D6",
    price: "10.00",
    desc: "Lychee Juice",
  },
  {
    image: mixcard,
    backgroundColor: "F79647",
    price: "10.00",
    desc: "Mix Fruite Juice",
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
    desc: "Mango Juice",
  },
  {
    image: anarcard,
    backgroundColor: "ED6070",
    price: "10.00",
    desc: "Anar Juice",
  },
];

const plusProducts = [
 
  {
    image: p4,
    backgroundColor: "F79745",
    price: "0.00",
    desc: "Orange Juice",
  },
  {
    image: p2,
    backgroundColor: "F8C0D6",
    price: "0.00",
    desc: "Lychee Juice",
  },
  {
    image: p7,
    backgroundColor: "ED6070",
    price: "0.00",
    desc: "Anar Juice",
  },
  {
    image: p6,
    backgroundColor: "0E4E29",
    price: "0.00",
    desc: "Jeera",
  },
  {
    image: p3,
    backgroundColor: "A0CF6E",
    price: "0.00",
    desc: "Guava Juice",
  },
  
];

const Products = () => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const goToPrevious1 = () => {
    const isFirstSlide = currentIndex1 === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(products.length / 3) - 1
      : currentIndex1 - 1;
    setCurrentIndex1(newIndex);
  };

  const goToNext1 = () => {
    const isLastSlide = currentIndex1 === Math.ceil(products.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex1 + 0.5;
    setCurrentIndex1(newIndex);
  };

  const goToPrevious2 = () => {
    const isFirstSlide = currentIndex2 === 0;
    const newIndex = isFirstSlide
      ? Math.ceil(plusProducts.length / 3) - 1
      : currentIndex2 - 1;
    setCurrentIndex2(newIndex);
  };

  const goToNext2 = () => {
    const isLastSlide = currentIndex2 === Math.ceil(plusProducts.length / 3) - 1;
    const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
    setCurrentIndex2(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden pt-24">
      <h1 className="text-center font-semibold text-4xl">
        Our Fruitful Products
      </h1>
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 bg-white p-2 rounded-full shadow-lg z-10"
          onClick={goToPrevious1}
        >
          <FaArrowLeft />
        </button>
        <div className="flex px-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex1 * (100 / 2)}%)` }}
          >
            {products.map((product, index) => (
              <div key={index} className="p-2">
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
          onClick={goToNext1}
        >
          <FaArrowRight />
        </button>
      </div>
      <h1 className="text-center font-semibold text-4xl mt-8">
        Our Fruitful
        <span className="font-semibold text-red-500">+</span> Products
      </h1>
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 bg-white p-2 rounded-full shadow-lg z-10"
          onClick={goToPrevious2}
        >
          <FaArrowLeft />
        </button>
        <div className="flex px-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex2 * (100 / 2)}%)` }}
          >
            {plusProducts.map((product, index) => (
              <div key={index} className="p-2">
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
          onClick={goToNext2}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
