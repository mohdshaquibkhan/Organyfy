import React from "react";
import aimg from "../assets/a.jpg";
import bimg from "../assets/b.jpg";
import cimg from "../assets/c.jpg";
import dimg from "../assets/d.jpeg";

const posts = [
  {
    category: "Lifestyle",
    title: "5 Reasons It's Time to Upgrade Your Vitamin Routine",
    desc: "Your recommendations are backed by our scientific advisory board, made of leading doctors, scientists, and nutritionists. We are upfront ab...",
    author: "French Aldebra",
    date: "Apr 1, 2022",
    img: aimg,
  },
  {
    category: "Healthy",
    title: "Health : Recipes and fitness tips for 2018",
    desc: "There are tons of healthy living blogs and resources online that it can feel overwhelming — with so many to choose from, how do yo...",
    author: "Verencia Rodrigo",
    date: "May 21, 2022",
    img: bimg,
  },
  {
    category: "Lifestyle",
    title: "5 ways to de-stress over the holidays",
    desc: "I tend to get a lot of questions this time of year about how to prevent and deal with stress, and between holiday parties, family obligations,...",
    author: "Alvonzo Humuz",
    date: "Nov 22, 2022",
    img: cimg,
  },
  {
    category: "Nutrition",
    title: "Personalized Vitamins for 2021: A Dietitian’s Review",
    desc: "My health goals included improved digestion, energy, stress management, immunity, sleep, and aiding exercise performance. The p...",
    author: "Vivian Airy",
    date: "Jul 22, 2022",
    img: dimg,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading + underline */}
        <h2 className="text-3xl font-bold text-gray-800">Our Blog Post</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mt-2 rounded-full"></div>

        {/* Blog Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-black shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out overflow-hidden"
            >
              {/* Image */}
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500 mb-1">{post.category}</p>
                <h3 className="font-semibold text-lg text-gray-800 leading-snug line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {post.desc}
                </p>

                {/* Author + Date */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={post.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
