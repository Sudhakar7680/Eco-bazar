import React from 'react';
import logo from '../../assets/logo.png';
import applepay from '../../assets/ApplePay.png';
import visa from '../../assets/Visa.png';
import discover from '../../assets/Discover.png';
import master from '../../assets/Mastercard.png';
import securepayment from '../../assets/securepayment.png';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
  <div className="logo-newsletter">
    <img src={logo} alt='logo'/>
    <h1 className="logo">Ecobazar</h1>
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Pellentesque eu nibh eget mauris congue mattis mattis.</p>
      <div className="subscribe-input">
        <input type="email" placeholder="Your email address" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  </div>
</div>

      <div className="footer-middle">
        <div className="footer-column">
          <h3>About Shopery</h3>
          <p>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
          <p>
            (219) 555-0114 or <a href="mailto:Proxy@gmail.com">Proxy@gmail.com</a>
          </p>
        </div>
        <div className="footer-column">
          <h3>My Account</h3>
          <ul>
            <li><Link to="/myaccount">My Account</Link></li>
            <li><Link to="/order-history">Order History</Link></li>
            <li><Link to="/cart">Shopping Cart</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Helps</h3>
          <ul>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Proxy</h3>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/productlist">Product</Link></li>
            <li><Link to="/productdetails">Products Details</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Download our Mobile App</h3>
          <div className="app-buttons">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">Download on Google Play</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
        <div className="payment-methods">
          <img src={applepay} alt="Apple Pay" />
          <img src={visa}alt="Visa" />
          <img src={discover} alt="Discover"/>
          <img src={master} alt="MasterCard" />
          <img src={securepayment} alt="Secure Payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
