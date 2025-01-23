import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import ImageDetails from './Imagedetails/ImageDetails';
import Shop from './pages/Shop';
import Blogs from './blogs/Blogs';
import BlogsList from './blogs/BlogsList';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CategoryList from './pages/CategoryList';
import TestimonialCarousel from './pages/TestimonialCarousel';
import InstagramGallery from './pages/InstagramGallery';
import PromotionBanner from './pages/PromotionBanner';
import NewsletterPopup from './popup/NewsletterPopup';
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';
import Myaccount from './account/Myaccount';

export default function App() {
  const [cartCount, setCartCount] = useState(() => {
    // Load cart count from localStorage on initialization
    const savedCartCount = localStorage.getItem('cartCount');
    return savedCartCount ? parseInt(savedCartCount, 10) : 0;
  });
  

  const handleCartUpdate = (newCartCount) => {
    setCartCount(newCartCount);
    localStorage.setItem('cartCount', newCartCount);
  };
 

  return (
    <div>
      <Header cartCount={cartCount}  />
      <NewsletterPopup/>
      <Routes>
        <Route path="/" element={<Home onCartUpdate={handleCartUpdate}  />} />
        <Route path="/home" element={<Home onCartUpdate={handleCartUpdate} />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/image-details/:id" element={<ImageDetails/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogslist" element={<BlogsList/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/myaccount" element={<Myaccount/>}/>
        <Route path="/contactus" element={<ContactUs />} />
        <Route path ="/productlist" element={<ProductList onCartUpdate={handleCartUpdate} />}/>
        <Route path="/product/:id" element={<ProductDetails onCartUpdate={handleCartUpdate} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

const Home = ({ onCartUpdate}) => {
  return (
    <div>
      <HeroSection />
      <ProductList onCartUpdate={onCartUpdate}   />
      <CategoryList />
      <PromotionBanner />
      <TestimonialCarousel />
      <InstagramGallery />
      
    </div>
  );
};
