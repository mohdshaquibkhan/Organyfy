import React from "react";
import ToorDal from "../assets/toordal.png";
import Ghee from "../assets/ghee.png";
import Redchilli from "../assets/laalmirchi.png";

export default function    HighQuality() {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Images Section */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Image 1 */}
          <img
            src={ToorDal}
            alt="Toor Dal"
            className="w-32 h-40 object-contain rounded-full border-4 border-gray-100 shadow-md"
          />
          {/* Image 2 */}
          <img
            src={Ghee}
            alt="Ghee"
            className="w-36 h-36 object-contain rounded-full border-4 border-gray-100 shadow-md z-10"
          />
          {/* Image 3 */}
          <img
            src={Redchilli}
            alt="Rice"
            className="w-32 h-40 object-contain rounded-full border-4 border-gray-100 shadow-md"
          />

          {/* Badge */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
            20+ Years Experience
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-green-600 font-bold uppercase text-lg">
            High Quality
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Organic Food Store
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2009, GROCE is a family business that started with a
            3,500 square meter farm located in Karyawangi Village, West Bandung.
            It soon expanded to an organic movement that encourages people to
            not only consume organic vegetables, but also plant it too, wherever
            they may be. From them you can purchase both the farm produce
            (vegetables, microgreens, etc) and also tools and supplies to start
            your own garden.
          </p>
          <p className="text-sm italic text-green-700">
            Finding organic food in Jakarta can be tricky but it’s not impossible! 
            Here are some great organic food sellers who delivers right to your door!
          </p>
        </div>
      </div>
    </section>
  );
}
