import React from "react";
import { FiArrowRight } from "react-icons/fi";
import RedChilli from "../assets/laalmirchi.png";
import Coriander from "../assets/Dhaniya.png";
import Ghee from "../assets/gee.png";

const categories = [
  {
    id: 1,
    title: "Vegetables",
    desc: "Purchasing from select family farmers who farms organically",
    img: RedChilli,
    btn: "ORDER NOW",
  },
  {
    id: 2,
    title: "Fruits",
    desc: "Purchasing from select family farmers who farms organically",
    img: Coriander,
    btn: "ORDER NOW",
  },
  {
    id: 3,
    title: "Salad",
    desc: "Purchasing from select family farmers who farms organically",
    img: Ghee,
    btn: "ORDER NOW",
  },
];

const Categories = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading with full underline */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block border-b-4 border-green-600 pb-1">
          Our Best Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white shadow-lg shadow-black/30 rounded-xl p-5 flex flex-col items-center transform transition duration-300 hover:scale-105"
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="font-bold text-lg">{cat.title}</h3>
              <p className="text-gray-500 text-sm mt-2 mb-4">{cat.desc}</p>
              <button className="border border-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 hover:text-white transition">
                {cat.btn}
              </button>
            </div>
          ))}

          <div className="bg-green-600 text-white rounded-xl p-6 flex flex-col justify-center items-start shadow-lg shadow-black/30 transform transition duration-300 hover:scale-105">
            <h3 className="font-bold text-lg">Others</h3>
            <p className="text-sm mt-2 mb-6">Milk, Tools, Spice, etc.</p>
            <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-green-600 transition">
              See Others <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
