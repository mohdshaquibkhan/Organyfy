import React from 'react'
import Categories from './Component/Categories'
import Navbar from './Component/Navbar'
import Store from "./Component/store";
import BlogPost from "./Component/BlogPost";
import SubscribeNewslatter from "./Component/SubscribeNewslatter";
import Footer from "./Component/Footer";
import HighQuality from "./Component/HighQuality";
import HeroSection from './Component/HeroSection';

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <HighQuality/>
      <Categories />
      <Store/>
      <BlogPost/>
      <SubscribeNewslatter/>
      <Footer/>
    </div>
  )
}

export default App
