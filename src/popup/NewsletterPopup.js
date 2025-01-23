import React, { useState, useEffect } from 'react';
import popupimage from '../assets/popupimage.png';
import './NewsletterPopup.css'; 

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const isPopupHidden = localStorage.getItem('hideNewsletterPopup');
    if (!isPopupHidden) {
      const timer=setTimeout(()=>{
        setIsVisible(true);

      }, 5000);
      return()=>clearTimeout(timer);
     
    }
  }, []);

  const closePopup = () => {
    if (dontShowAgain) {
      localStorage.setItem('hideNewsletterPopup', 'true');
    }
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="newsletter-popup-overlay">
        <div className="newsletter-popup">
          <button className="close-button" onClick={closePopup}> &times;</button>
          <div className="popup-contents">
            <img src={popupimage} alt="Subscribe"className="popup-image"/>
            <div className="popup-text">
              <h2>Subscribe to Our Newsletter</h2>
              <p> Subscribe to our newsletter and Save your <strong>20% money</strong> with discount code today.</p>
              <input type="email" placeholder="Enter your email" className="email-input" />
              <button className="subscribe-button">Subscribe</button>
              <div className="dont-show">
                <input type="checkbox"id="dontShowAgain"checked={dontShowAgain} onChange={() => setDontShowAgain(!dontShowAgain)}/>
                <label htmlFor="dontShowAgain">Do not show this window</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
