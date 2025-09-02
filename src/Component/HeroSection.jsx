import React from "react";
import { FaStar } from "react-icons/fa";
import CorianderPowerImg from "../assets/HeroSection/Coriander Powder.png";
import PowderImg from "../assets/HeroSection/Powder.png";
import Leafpattern from "../assets/HeroSection/leafpattern.png";
import img from "../assets/HeroSection/img.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-gray-700 font-medium">100% Healthy & Tasty</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <span className="text-green-600">ORGANIC</span>{" "}
            <span className="text-gray-800">FOOD</span>
          </h1>
          <p className="text-gray-600 max-w-md">
            A place where help you to buy fresh grocery. Tasty and 100% healthy
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              How to Order
            </button>
            <button className="border border-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Sale
            </button>
          </div>

          {/* Review Card - hidden on mobile */}
          <div className="hidden md:flex bg-gray-800 text-white max-w-sm rounded-lg p-4 shadow-md gap-3 items-center">
            <img
              src="https://i.pravatar.cc/50"
              alt="user"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="font-semibold">Marina Stevani</h4>
              <div className="flex text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-200">
                Made everyone feel at ease and was extremely attentive towards
                allergies and intolerances.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center relative">
          <img
            src={CorianderPowerImg}
            alt="Coriander Powder"
            className="w-56 sm:w-64 md:w-80 z-10 relative"
          />
          <img
            src={PowderImg}
            alt="Red Chilli Powder"
            className="w-40 sm:w-48 md:w-72 absolute right-[-40px] top-6"
          />
        </div>
      </div>

      {/* Middle Features */}
      <div className="relative bg-green-600 text-white py-12">
        {/* Background Shape  */}
        <div className="absolute inset-0 bg-green-700 -skew-y-3"></div>

        <div className="relative max-w-7xl mx-auto px-6 flex justify-center md:justify-end">
          <img
            src={img}
            alt="Features"
            className="w-2/3 md:w-1/2 lg:w-1/3 object-contain"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div
        className="relative text-white py-12 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${Leafpattern})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-700/80 via-green-600/70 to-green-700/80"></div>

        {/* Mobile: scrollable row | Desktop: grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex md:grid md:grid-cols-4 gap-6 text-center overflow-x-auto no-scrollbar">
            <div className="min-w-[150px]">
              <h2 className="text-3xl font-bold drop-shadow-md">1975+</h2>
              <p className="drop-shadow-sm">Total Products</p>
            </div>
            <div className="min-w-[150px]">
              <h2 className="text-3xl font-bold drop-shadow-md">2880+</h2>
              <p className="drop-shadow-sm">Satisfied Clients</p>
            </div>
            <div className="min-w-[150px]">
              <h2 className="text-3xl font-bold drop-shadow-md">3219+</h2>
              <p className="drop-shadow-sm">Project Completed</p>
            </div>
            <div className="min-w-[150px]">
              <h2 className="text-3xl font-bold drop-shadow-md">100%</h2>
              <p className="drop-shadow-sm">Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
