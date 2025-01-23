import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import './CategoryList.css';
import meat from '../assets/meat.png';
import allvegetables from '../assets/allvegetables.jpg';
import riverfishes from '../assets/riverfishes.png';
import snacks from '../assets/snacks.png';
import cooldrinks from '../assets/cooldrinks.png';
import freshfruits from '../assets/freshfruits.png';
import dairy from '../assets/dairy.png';

const categories = [
  {
    id: 1,
    name: 'Vegetables',
    productCount: 165,
    imageUrl: allvegetables,
  },
  {
    id: 2,
    name: 'Fresh Fruit',
    productCount: 137,
    imageUrl: freshfruits, 
  },
  {
    id: 3,
    name: 'River Fish',
    productCount: 34,
    imageUrl: riverfishes, 
  },
  {
    id: 4,
    name: 'Meat',
    productCount: 165,
    imageUrl: meat,
  },
  {
    id: 5,
    name: 'Water and Drinks',
    productCount: 48,
    imageUrl: cooldrinks, 
  },
  {
    id: 6,
    name: 'Snacks',
    productCount: 80,
    imageUrl: snacks, 
  },
  {
    id: 7,
    name: 'Dairy',
    productCount: 54,
    imageUrl: dairy,
  },
];

const CategoryList = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/shop')
  };

  return (
    <div className="category-list">
      <h2>Top Category</h2>
      <Swiper modules={[Pagination]}  pagination={{ clickable: true }}  slidesPerView="auto" spaceBetween={20} >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="category-card" onClick={() => handleCategoryClick(category)} >
              <img src={category.imageUrl} alt={category.name} className="category-image" />
              <h3>{category.name}</h3>
              <p>{category.productCount} Products</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryList;
