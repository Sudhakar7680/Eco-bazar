import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import tomatos from '../assets/tomatos.png';
import mango from '../assets/mango.png';
import redchilli from '../assets/redchilli.png';
import ladyfinger from '../assets/ladyfinger.png';
import greencucumber from '../assets/greencucumber.png';
import Whole_Chicken from '../assets/Whole_Chicken.jpg';
import raw_chicken from '../assets/raw_chicken.jpg';
import Beef_Meat from '../assets/Beef_Meat.png';
import chicken_drumsticks from '../assets/chicken_drumsticks.png';
import Fish from '../assets/Fish.jpg';
import meat from '../assets/meat.png';
import ShoreFreshFish from '../assets/ShoreFreshFish.png';
import TilapiaFilletsFish from '../assets/TilapiaFilletsFish.png';
import starEmpty from '../assets/starEmpty.png';

import './Shop.css';

const initialProducts = [
  { id: 1, name: 'Green Apple', category: 'Fruits', price: 10.99, rating: 4.8, imageUrl: greenapple },
  { id: 2, name: 'Chanise Cabbage', category: 'Vegetables', price: 13.99, rating: 4.5, imageUrl: chanisecabbage, sale: true },
  { id: 3, name: 'Green lettuce', category: 'Vegetables', price: 14.99, rating: 4.1, imageUrl: greenlettuce },
  { id: 4, name: 'Green Capsicum', category: 'Vegetables', price: 12.0, rating: 4.6, imageUrl: greenchili },
  { id: 5, name: 'Corn', category: 'Vegetables', price: 20.0, rating: 4.0, imageUrl: corn, outOfStock: true },
  { id: 6, name: 'Green Chili', category: 'Vegetables', price: 20.0, rating: 4.5, imageUrl: chilli },
  { id: 7, name: 'Big Potato', category: 'Vegetables', price: 25.99, rating: 4.2, imageUrl: potato, popular: true },
  { id: 8, name: 'Orange', category: 'Fruits', price: 9.99, rating: 4.3, imageUrl: orange },
  { id: 9, name: 'Brinjal', category: 'Vegetables', price: 15, rating: 4.3, imageUrl: brinjal },
  { id: 10, name: 'Fresh Cauliflower', category: 'Vegetables', price: 24.99, rating: 4.4, imageUrl: cauliflower, popular: true },
  { id: 11, name: 'Red Chili', category: 'Vegetables', price: 18.0, rating: 3.9, imageUrl: redchilli },
  { id: 12, name: 'Tomato', category: 'Vegetables', price: 25.0, rating: 4.1, imageUrl: tomatos },
  { id: 13, name: 'Fresh Mango', category: 'Fruits', price: 7.0, rating: 4.9, imageUrl: mango, popular: true, sale: true },
  { id: 14, name: 'Lady Finger', category: 'Vegetables', price: 16.99, rating: 4.1, imageUrl: ladyfinger },
  { id: 15, name: 'Green cucumber', category: 'Vegetables', price: 18.0, rating: 4.1, imageUrl: greencucumber,sale:0.5},
  { id: 16, name: 'Whole Chicken', category: 'Non-Veg', price: 199.99, rating: 4.1, imageUrl: Whole_Chicken,},
  { id: 17, name: 'Raw Chicken', category: 'Non-Veg', price: 150.99, rating: 4.1, imageUrl: raw_chicken},
  { id: 18, name: 'Beet Meat', category: 'Non-Veg', price: 500.99, rating: 4.1, imageUrl: Beef_Meat},
  { id: 19, name: 'Chicken DrumSticks', category: 'Non-Veg', price: 300.99, rating: 4.1, imageUrl: chicken_drumsticks},
  { id: 20, name: 'Fish', category: 'Non-Veg', price: 129.99, rating: 4.1, imageUrl: Fish},
  { id: 21, name: 'Meat', category: 'Non-Veg', price: 550.99, rating: 4.1, imageUrl: meat},
  { id: 22, name: 'Shore Fish', category: 'Non-Veg', price: 259.99, rating: 4.1, imageUrl: ShoreFreshFish},
  { id: 23, name: 'Tilapia Fish', category: 'Non-Veg', price: 299.99, rating: 4.1, imageUrl: TilapiaFilletsFish},

  // Add more products as needed
];

const Shop = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [0, 600],
    rating: 0,
    tags: {
      popular: false,
      sale: false,
    },
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    const { category, priceRange, rating, tags } = filters;
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= rating;
      const matchesTags = (!tags.popular || product.popular) && (!tags.sale || product.sale);

      return matchesCategory && matchesPrice && matchesRating && matchesTags;
    });
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (min, max) => {
    setFilters({ ...filters, priceRange: [min, max] });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: parseFloat(e.target.value) });
  };

  const handleTagChange = (tag) => {
    setFilters({
      ...filters,
      tags: { ...filters.tags, [tag]: !filters.tags[tag] },
    });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={i} src={star} alt="Star" className="star-icon" />);
    }

    if (halfStar) {
      stars.push(<img key="half" src={star} alt="Half Star" className="star-icon half-star" />);
    }

    for (let i = fullStars + (halfStar ? 1 : 0); i < totalStars; i++) {
      stars.push(
        <img key={i + 'empty'} src={starEmpty} alt="Empty Star" className="star-icon empty-star" />
      );
    }

    return stars;
  };

  return (
    <div className="shop-page">
      <div className="filter-sidebars">
        <h3>Filter By</h3>
        <div className="filter-sections">
          <h4>Category</h4>
          <select onChange={handleCategoryChange} value={filters.category}>
            <option value="All">All Categories</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>

        <div className="filter-sections">
          <h4>Price Range</h4>
          <input type="range" min="0" max="10" value={filters.priceRange[1]} onChange={(e) => handlePriceChange(0, parseFloat(e.target.value))} />
          <p>Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}</p>
        </div>

        <div className="filter-sections">
          <h4>Rating</h4>
          <select onChange={handleRatingChange} value={filters.rating}>
            <option value="0">All Ratings</option>
            <option value="4.5">4.5 & Up</option>
            <option value="4.0">4.0 & Up</option>
            <option value="3.5">3.5 & Up</option>
          </select>
        </div>

        <div className="filter-sections">
          <h4>Tags</h4>
          <div>
            <label>
              <input type="checkbox"checked={filters.tags.popular} onChange={() => handleTagChange('popular')}/>
              Popular
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" checked={filters.tags.sale}onChange={() => handleTagChange('sale')}/>
              Sale Products
            </label>
          </div>
        </div>
      </div>

      <div className="product-lists">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-cards" onClick={()=>navigate(`/product/${product.id}`)}>
            <div className="product-card-headers">
              {product.sale && <span className="sale-badge">Sale</span>}
              {product.popular && <span className="popular-badge">Popular</span>}
              {product.outOfStock && <span className="out-of-stock-badge">Out of Stock</span>}
            </div >
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <div className="product-ratings">{renderStars(product.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
