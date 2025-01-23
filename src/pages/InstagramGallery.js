import React from 'react';
import tomato from '../assets/tomato.png';
import leafgreen from '../assets/leafgreen.png';
import leaf from '../assets/leaf.png';
import redcapsicum from '../assets/redcapsicum.png';
import cocunut from '../assets/cocunut.png';
import  allveg from '../assets/allveg.png';

import './InstagramGallery.css'; 

const InstagramGallery = () => {
  
  const image = [tomato,leafgreen,leaf,redcapsicum,cocunut,allveg]

  return (
    <div className="instagram-gallery">
    <h2>Follow us on Instagram</h2>
    <div className="gallery-grid">
      {image.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Instagram Image ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default InstagramGallery;
