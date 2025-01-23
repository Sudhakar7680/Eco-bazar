import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PromotionBanner.css';
import allbanner from '../assets/allbanner.png';
import meatbanner from '../assets/meatbanner.png';
import fruitsbanner from '../assets/fruitsbanner.png';


const PromotionBanner = () => {
  const navigate = useNavigate();

  const calculateTimeLeft = (duration) => {
    if (!duration) return null; 

    const totalSeconds = duration.hours * 3600 + duration.minutes * 60 + duration.seconds;
    const targetTime = new Date().getTime() + totalSeconds * 1000;

    const timeLeft = targetTime - new Date().getTime();

    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return { hours, minutes, seconds };
  };

  
  const promotions = [
    {
      title: 'Sale of the Month',
      subTitle: 'BEST DEALS',
      timer: { hours: 2, minutes: 18, seconds: 46 },
      image: allbanner,
      action: 'Shop Now',
      theme: 'blue',
    },
    {
      title: 'Low-Fat Meat',
      subTitle: '85% FAT FREE',
      price: 'Started at $79.99',
      image: meatbanner,
      action: 'Shop Now',
      theme: 'black',
    },
    {
      title: '100% Fresh Fruit',
      subTitle: 'SUMMER SALE',
      discount: 'Up to 64% OFF',
      image: fruitsbanner,
      action: 'Shop Now',
      theme: 'yellow',
    },
  ];

  
  const [timers, setTimers] = useState(
    promotions.map((promo) => promo.timer ? calculateTimeLeft(promo.timer) : null)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer, index) => {
          if (!timer) return null; 

          const newTimer = { ...timer };
          if (newTimer.seconds > 0) {
            newTimer.seconds -= 1;
          } else if (newTimer.minutes > 0) {
            newTimer.minutes -= 1;
            newTimer.seconds = 59;
          } else if (newTimer.hours > 0) {
            newTimer.hours -= 1;
            newTimer.minutes = 59;
            newTimer.seconds = 59;
          }
          return newTimer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const formatTimer = (timer) => {
    if (!timer) return '';
    const { hours, minutes, seconds } = timer;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="promotion-banner">
      <div className="promotion-grid">
        {promotions.map((promo, index) => (
          <div key={index} className={`promo-card ${promo.theme}`}>
            <div className="promo-image-container">
              <img src={promo.image} alt={promo.title} className="promo-image" />
              <div className="promo-overlay">
                <h3 className="promo-subtitle">{promo.subTitle}</h3>
                <h2 className="promo-title">{promo.title}</h2>
                {promo.timer && (
                  <p className="promo-timer">Ends in: {formatTimer(timers[index])}</p>
                )}
                {promo.discount && <p className="promo-discount">{promo.discount}</p>}
                {promo.price && <p className="promo-price">{promo.price}</p>}
                <button className="promo-button" onClick={() => navigate('/shop')} >
                  {promo.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionBanner;
