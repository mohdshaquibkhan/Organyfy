import React from 'react'
import { Routes, Route } from "react-router-dom";
import Categories from './Component/Categories'
import Navbar from './Component/Navbar'
import Store from "./Component/store";
import BlogPost from "./Component/BlogPost";
import SubscribeNewslatter from "./Component/SubscribeNewslatter";
import Footer from "./Component/Footer";
import HighQuality from "./Component/HighQuality";
import HeroSection from './Component/HeroSection';
import Login from "./Component/Login";
import Signup from './Component/Signup';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HighQuality />
              <Categories />
              <Store />
              <BlogPost />
              <SubscribeNewslatter />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
