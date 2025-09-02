import React from "react";
import Ghee from "../assets/ghee.png";
import VegPattern from "../assets/VegPattern.png";

export default function SubscribeNewslatter() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Top Heading with Underline */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 inline-block relative">
          Subscribe to <span className="text-green-600">Newsletter</span>
          {/* Green Underline */}
          <span className="block w-20 h-1 bg-green-600 mx-auto mt-2 rounded"></span>
        </h2>
        <p className="text-gray-600 mt-2">To get weekly recipe updates</p>
      </div>

      {/* Green Box with Background Pattern */}
      <div
        className="mt-8 relative flex flex-col md:flex-row items-center md:items-stretch justify-between rounded-lg px-4 md:px-6 py-2 md:py-3 overflow-hidden"
        style={{
          backgroundColor: "#22c55e",
          backgroundImage: `url(${VegPattern})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Left - Ghee Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-full">
          <img
            src={Ghee}
            alt="Pure Cow Ghee"
            className="h-full max-h-60 object-contain"
          />
        </div>

        {/* Right - Input and Button */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center justify-center gap-3">
          {/* Input Box */}
          <div className="w-full md:w-2/3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 rounded-lg border border-green-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Button Box */}
          <div>
            <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition transform hover:scale-105">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
