import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import organyfylogo from "../assets/organyfylogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);

  // Close mobile submenus when mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setMobileCategoryOpen(false);
      setMobileBlogsOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          {/* In React, anything in public is served from root: use '/organyfylogo.jpg' */}
          <img
            src={organyfylogo}
            alt="Organyfy Logo"
            className="h-10 w-auto md:h-12"
            loading="eager"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[0.95rem] font-semibold text-gray-700">
          {/* Shop By Category - Mega Dropdown */}

          <li className="relative group">
            <button
              className="flex items-center gap-1 py-2 px-1 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 rounded"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Shop By Category
              <MdArrowDropDown className="text-lg" />
            </button>

            {/* Dropdown panel */}
            <div
              className="
      invisible opacity-0 translate-y-2
      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
      transition duration-200 ease-out
      absolute left-0 top-full
      bg-white border border-gray-200 shadow-lg rounded-md
      w-max 
      pointer-events-none group-hover:pointer-events-auto
      z-40
    "
            >
              <div className="px-6 py-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm text-gray-700 whitespace-nowrap">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Teas & Infusions
                    </h4>
                    <ul className="space-y-2">
                      <li className="hover:text-green-700 cursor-pointer">
                        Green Tea
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Wellness Tea
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Infusion
                      </li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Herbal Supplement
                    </h4>
                    <ul className="space-y-2">
                      <li className="hover:text-green-700 cursor-pointer">
                        Herbal Powders
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Herbal Capsules
                      </li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Packaged Food
                    </h4>
                    <ul className="space-y-2">
                      <li className="hover:text-green-700 cursor-pointer">
                        Dal & Pulses
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Health Food
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Oil & Ghee
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Salt & Spices
                      </li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Personal Care
                    </h4>
                    <ul className="space-y-2">
                      <li className="hover:text-green-700 cursor-pointer">
                        Body Care
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Face Care
                      </li>
                      <li className="hover:text-green-700 cursor-pointer">
                        Hair Care
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="cursor-pointer hover:text-green-700">
            Deal Of The Day
          </li>

          {/* Blogs Dropdown */}
          <li className="relative group">
            <button
              className="flex items-center gap-1 py-2 px-1 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 rounded"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              Blogs
              <MdArrowDropDown className="text-lg" />
            </button>
            <div
              className="
        invisible opacity-0 translate-y-2
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
        transition duration-150 ease-out
        absolute left-0 top-full
        bg-white border border-gray-200 shadow-lg rounded-md
        w-56 p-3
        pointer-events-none group-hover:pointer-events-auto
      "
            >
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="hover:text-green-700 cursor-pointer">
                  Health Tips
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Wellness
                </li>
                <li className="hover:text-green-700 cursor-pointer">
                  Organic Lifestyle
                </li>
              </ul>
            </div>
          </li>

          <li className="cursor-pointer hover:text-green-700">Combo Offer</li>
          <li className="cursor-pointer hover:text-green-700">
            Track Your Order
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-700">
          <button aria-label="Search" className="p-1 hover:text-green-700">
            <FaSearch className="w-5 h-5" />
          </button>
          <button className="text-sm hover:text-green-700 hidden sm:inline">
            Login
          </button>

          <button className="relative">
            <FaHeart className="w-5 h-5 hover:text-green-700" />
            <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>

          <button className="relative">
            <FaShoppingBag className="w-5 h-5 hover:text-green-700" />
            <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full px-1">
              0
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white border-t border-gray-200 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-3 text-[0.95rem] font-medium text-gray-800 divide-y divide-gray-100">
          {/* Category accordion */}
          <li className="py-2">
            <button
              className="w-full flex items-center justify-between py-2 hover:text-green-700"
              onClick={() => setMobileCategoryOpen((v) => !v)}
              aria-expanded={mobileCategoryOpen}
              aria-controls="mobile-cat"
            >
              <span>Shop By Category</span>
              <MdArrowDropDown
                className={`text-xl transition-transform ${
                  mobileCategoryOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="mobile-cat"
              className={`grid grid-cols-1 gap-2 pl-3 pr-1 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
                mobileCategoryOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <button className="text-left py-1 hover:text-green-700">
                Herbal Supplements
              </button>
              <button className="text-left py-1 hover:text-green-700">
                Organic Teas
              </button>
              <button className="text-left py-1 hover:text-green-700">
                Health Foods
              </button>
              <button className="text-left py-1 hover:text-green-700">
                Personal Care
              </button>
            </div>
          </li>

          <li className="py-2">
            <button className="w-full text-left py-2 hover:text-green-700">
              Deal Of The Day
            </button>
          </li>

          {/* Blogs accordion */}
          <li className="py-2">
            <button
              className="w-full flex items-center justify-between py-2 hover:text-green-700"
              onClick={() => setMobileBlogsOpen((v) => !v)}
              aria-expanded={mobileBlogsOpen}
              aria-controls="mobile-blogs"
            >
              <span>Blogs</span>
              <MdArrowDropDown
                className={`text-xl transition-transform ${
                  mobileBlogsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id="mobile-blogs"
              className={`grid grid-cols-1 gap-2 pl-3 pr-1 transition-[max-height,opacity] duration-200 ease-out overflow-hidden ${
                mobileBlogsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <button className="text-left py-1 hover:text-green-700">
                Health Tips
              </button>
              <button className="text-left py-1 hover:text-green-700">
                Wellness
              </button>
              <button className="text-left py-1 hover:text-green-700">
                Organic Lifestyle
              </button>
            </div>
          </li>

          <li className="py-2">
            <button className="w-full text-left py-2 hover:text-green-700">
              Combo Offer
            </button>
          </li>
          <li className="py-2">
            <button className="w-full text-left py-2 hover:text-green-700">
              Track Your Order
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}