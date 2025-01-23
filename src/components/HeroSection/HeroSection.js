import React from 'react';
import './Herosection.css';
import heroImage from '../../assets/heroImage.png';
import { FaTruck, FaHeadset, FaLock, FaRedoAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className='row'>
      <div className=" col-md-6 hero-content">
        <h5 className="welcome-text">WELCOME TO SHOPERY</h5>
        <h1 className="hero-title">
          Fresh & Healthy <br />
          Organic Food
        </h1>
        <p className="promo-text">
          Sale up to <span className="highlight-text">30% OFF</span>
        </p>
        <p className="sub-text">
          Free shipping on all your order. We deliver, you enjoy.
        </p>
        <button className="shop-now-btn">Shop now</button>
      </div>
      <div className=" col-md-6 hero-image">
        <Link to="/image-details/1"> 
          <img src={heroImage} alt="Organic Food" />
        </Link>
      </div>
      </div>
      <div className="features">
        <div className='row gap-5'>
        <div className=" col-md-2 feature">
          <FaTruck className="feature-icon" />
          <h5>Free Shipping</h5>
          <p>Free shipping on all your order</p>
        </div>
        <div className=" col-md-2 feature">
          <FaHeadset className="feature-icon" />
          <h5>Customer Support 24/7</h5>
          <p>Instant access to Support</p>
        </div>
        <div className=" col-md-2 feature">
          <FaLock className="feature-icon" />
          <h5>100% Secure Payment</h5>
          <p>We ensure your money is safe</p>
        </div>
        <div className=" col-md-2 feature">
          <FaRedoAlt className="feature-icon" />
          <h5>Money-Back Guarantee</h5>
          <p>30 Days Money-Back Guarantee</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
