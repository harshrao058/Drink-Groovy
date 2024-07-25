import React from "react";
import { DollarSign, Zap, Moon, Filter } from "lucide-react";
import { FaTrophy, FaClock, FaRecycle } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-16 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl fle">
          <p>COMPLETES YOUR DRINKS,</p>
          <p className="flex"> ANY TIME! ANY WHERE! </p>
        </h2>
        {/* <IoIosTimer className="text-4xl"/> */}
        <p className="mt-4 text-base leading-relaxed text-gray-600">
          Every sip of our juices takes you down memory lane. You don’t just
          enjoy the diversity of flavours but dive into a pool of quality fruit
          extracts. Groovy is not just a drink, it's a story spun together in
          the form of joyful and bright squeezy packs.
        </p>
        {/* <img
          src="../../logo.png"
          alt="Drink Packs"
          className="max-w-full m-auto h-[12vh]"
        /> */}
      </div>
      <div className="my-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaTrophy className="h-9 w-9 text-yellow-500 " />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            NATURAL TASTE
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Our fruit not only matches the flavour of fresh fruit but also
            serves as a fantastic flavour booster to the drink.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaClock className="h-9 w-9 text-blue-500" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            NO ADDED COLORS/PRESERVATIVES
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <FaRecycle className="h-9 w-9 text-green-500" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">
            MINIMUM WASTE
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Using fresh fruit is always nice to store your fruits in a locked
            hub. No more fridge full of unloved fruit and veg.
          </p>
        </div>
       
      </div>
       <div className="w-full ">
          <img src="../../public/allpro.png" alt="" className=" mx-auto  " />
        </div>
    </div>
  );
}
