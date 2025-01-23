import React from 'react';
import heroImage from '../assets/heroImage.png';
import { useParams } from 'react-router-dom';
import './ImageDetails.css'; 

const ImageDetails = () => {
  const { id } = useParams(); 

  
  const imageData = {
    1: {
      title: "Fresh & Healthy Organic Food",
      description: "This is a detailed description of the organic food.",
      imageUrl: heroImage
    },
    
  };

  const imageDetails = imageData[id];

  if (!imageDetails) {
    return <div>Image not found!</div>;
  }

  return (
    <div className="image-details-container">
      <h1>{imageDetails.title}</h1>
      <img src={imageDetails.imageUrl} alt={imageDetails.title} className="details-image" />
      <p>{imageDetails.description}</p>
    </div>
  );
};

export default ImageDetails;
