import React from "react";
import { Clock, Utensils, Car, Package, CheckCircle } from "lucide-react";
import Appstore from "../assets/appstore.png";
import GooglePlayLogo from "../assets/GooglePlayLogo.png";

export default function Store() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We are here <span className="text-green-600">for You</span>
          </h2>

          <p className="text-gray-600 max-w-md mt-6 text-left">
            Grace could be your daily service. We set the high standard inspired
            by forest system to produce healthy crops with the authentic taste
            of vegetables.
          </p>

          {/* Points List */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Best service and fast response
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Userfriendly app
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Professional staff
            </li>
          </ul>

          {/* App Buttons */}
          <div className="flex gap-10 mt-16">
            <img src={Appstore} alt="App Store" className="h-12 cursor-pointer" />
            <img
              src={GooglePlayLogo}
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Content (Service Features) */}
        <div className="flex-1 mt-14">
          <div className="grid grid-cols-2 gap-2 max-w-md">
            {/* Fast Delivery */}
            <div className="bg-white rounded-lg p-4 shadow-black/40 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-xs">Deliver within 30 minutes</p>
            </div>

            {/* Fresh Foods */}
            <div className="bg-white rounded-lg p-4 shadow-black/40 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <Utensils className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Fresh Foods
              </h3>
              <p className="text-gray-600 text-xs">
                Enjoy your food fresh and healthy
              </p>
            </div>

            {/* Dine In */}
            <div className="bg-white rounded-lg p-4 shadow-black/40 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <Car className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Dine In
              </h3>
              <p className="text-gray-600 text-xs">
                Enjoy your food fresh and healthy
              </p>
            </div>

            {/* Pick Up */}
            <div className="bg-white rounded-lg p-4 shadow-black/40 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-2">
                <div className="bg-green-500 p-2 rounded-full">
                  <Package className="h-5 w-5 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">
                Pick Up
              </h3>
              <p className="text-gray-600 text-xs">Delivery at your doorstep</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
