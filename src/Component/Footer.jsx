import React from "react";
import Organyfy from "../assets/organyfylogo.jpg";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Newsletter */}
        <div className="flex flex-col items-start gap-4">
          {/* Logo */}
          <img
            src={Organyfy}
            alt="Organyfy Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />

          {/* Tagline */}
          <p className="text-sm text-gray-600">100% Healthy & Tasty</p>

          {/* Newsletter */}
          <h3 className="text-md md:text-lg font-semibold">
            Subscribe Our Newsletter
          </h3>
          <p className="text-sm text-gray-600">
            Be the first one to know about discounts, offers and events. 
            Unsubscribe whenever you like.
          </p>

          {/* Input + Button */}
          <div className="flex flex-row items-center gap-2 mt-2 w-full">
            <input
              type="email"
              placeholder="Enter Your email"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-600 text-white px-4 py-2 text-sm rounded-md hover:bg-teal-700 transition">
              Subscribe now
            </button>
          </div>
        </div>

        {/* Right Section (About + Support + FAQ) */}
        <div className="md:col-span-3">
         
          <div className="grid grid-cols-3 gap-6">
            
            {/* About */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-md md:text-lg">About</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">About us</a></li>
                <li><a href="#" className="hover:text-teal-600">Blog</a></li>
                <li><a href="#" className="hover:text-teal-600">Careers</a></li>
                <li><a href="#" className="hover:text-teal-600">Jobs</a></li>
                <li><a href="#" className="hover:text-teal-600">In Press</a></li>
                <li><a href="#" className="hover:text-teal-600">Gallery</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-md md:text-lg">Support</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">Contact us</a></li>
                <li><a href="#" className="hover:text-teal-600">Online Chat</a></li>
                <li><a href="#" className="hover:text-teal-600">Whatsapp</a></li>
                <li><a href="#" className="hover:text-teal-600">Telegram</a></li>
                <li><a href="#" className="hover:text-teal-600">Ticketing</a></li>
                <li><a href="#" className="hover:text-teal-600">Call center</a></li>
              </ul>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-md md:text-lg">FAQ</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:text-teal-600">Account</a></li>
                <li><a href="#" className="hover:text-teal-600">Manage Deliveries</a></li>
                <li><a href="#" className="hover:text-teal-600">Orders</a></li>
                <li><a href="#" className="hover:text-teal-600">Payments</a></li>
                <li><a href="#" className="hover:text-teal-600">Returns</a></li>
                <li><a href="#" className="hover:text-teal-600">Privacy policy</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
