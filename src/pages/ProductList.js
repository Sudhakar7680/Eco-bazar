import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import greenapple from '../assets/green-apple.png';
import chanisecabbage from '../assets/chanise-cabbage.png';
import greenlettuce from '../assets/green-lettuce.png';
import greenchili from '../assets/green-chili.png';
import corn from '../assets/corn.png';
import chilli from '../assets/chilli.png';
import potato from '../assets/potato.png';
import brinjal from '../assets/brinjal.png';
import orange from '../assets/orange.png';
import cauliflower from '../assets/cauliflower.png';
import star from '../assets/star.png';



const products = [
  { id: 1, name: 'Green Apple', price: '10.99', imageUrl: greenapple, rating: 4.5, category: 'Hot Deals' },
  { id: 2, name: 'Chanise Cabbage', price: '13.99', imageUrl: chanisecabbage, rating: 4.2, category: 'Best Seller' },
  { id: 3, name: 'Green Lettuce', price: '14.99', imageUrl: greenlettuce, rating: 4.0, category: 'Hot Deals' },
  { id: 4, name: 'Green Capsicum', price: '12.0', imageUrl: greenchili, rating: 4.7, category: 'Top Rated' },
  { id: 5, name: 'Corn', price: '20.0', imageUrl: corn, rating: 4.3, category: 'Top Rated' },
  { id: 6, name: 'Chilli', price: '20.0', imageUrl: chilli, rating: 4.3, category: 'Top Rated' },
  { id: 7, name: 'Potato', price: '25.99', imageUrl: potato, rating: 4.3, category: 'Top Rated' },
  { id: 8, name: 'Orange', price: '9.99', imageUrl: orange, rating: 4.3, category: 'Top Rated' },
  { id: 9, name: 'Brinjal', price: '15.0', imageUrl: brinjal, rating: 4.3, category: 'Top Rated' },
  { id: 10, name: 'Fresh Cauliflower', price: '24.99', imageUrl: cauliflower, rating: 4.3, category: 'Top Rated' },
];

const ProductList = ({ onCartUpdate }) => {
  const [cart, setCart] = useState(() => {
    // Initialize state from localStorage
    return JSON.parse(localStorage.getItem('cart')) || [];
  });
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    onCartUpdate(cart.length);  
  }, [cart, onCartUpdate]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const toggleCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      const updatedCart = cart.filter((item) => item.id !== product.id);
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
    }
  };
 
  const getButtonClass = (productId) => {
    return cart.find((item) => item.id === productId) ? 'remove' : 'add';
  };
 

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{ cursor: 'pointer' }}>
            <img src={product.imageUrl} alt={product.name} onClick={() => handleProductClick(product.id)} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <div className="product-rating">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={star} alt="Star" className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`} />
              ))}
            </div>
            <button className={getButtonClass(product.id)}  onClick={() => toggleCart(product)} >
              {cart.find((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
