import React from 'react';
import carrot from '../assets/carrot.png';
import orange from '../assets/orange.png';
import cucumber from '../assets/greencucumber.png';
import beans from '../assets/beans.png';
import straberry from '../assets/straberry.png';
import image from '../assets/Image (1).png'; 
import images from '../assets/Image (2).png';
import allveg from '../assets/Image (3).png';
import './BlogsList.css';

const blogs = [{
    id: 1,
    image: straberry,
    date: '18 NOV',
    category: 'Food',
    author: 'Admin',
    comments: '65',
    title: 'Curabitur porttitor orci eget neque accumsan venenatis.',
    link: '#',
  },
  {
    id: 2,
    image: image,
    date: '10 NOV',
    category: 'Health',
    author: 'Admin',
    comments: '45',
    title: 'Proin facilisis lectus ut sapien elementum.',
    link: '#',
  },
  {
    id: 3,
    image: images,
    date: '5 NOV',
    category: 'Organic',
    author: 'Admin',
    comments: '30',
    title: 'Suspendisse eget neque quis nunc bibendum tristique.',
    link: '#',
  },
  {
    id: 4,
    image: allveg,
    date: '18 NOV',
    category: 'Organic',
    author: 'Admin',
    comments: '30',
    title: 'Suspendisse eget neque quis nunc bibendum tristique.',
    link: '#',
  },
];

const BlogsList = () => {
  return (
    <div className="blogs-page">
      <aside className="sidebar">
        <h3>Top Categories</h3>
        <ul className="category-list">
          <li>Fruits (64)</li>
          <li>Vegetables (58)</li>
          <li>Organic (45)</li>
        </ul>

        <h3>Popular Tags</h3>
        <div className="tags">
          <span className="tag">Fresh</span>
          <span className="tag">Organic</span>
          <span className="tag">Vegan</span>
        </div>

        <h3>Our Gallery</h3>
        <div className="gallery">
          <img src={carrot} alt="Gallery item 1" />
          <img src={orange} alt="Gallery item 2" />
          <img src={cucumber} alt="Gallery item 3" />
          <img src={beans} alt="Gallery item 4" />
        </div>

        <h3>Recently Added</h3>
        <ul className="recent-list">
          <li>Fresh Orange</li>
          <li>Seasonal Apple</li>
          <li>Organic Tomato</li>
        </ul>
      </aside>

      <section className="blogs-section">
        <div className="blogs-grid-header">
          <h2>{blogs.length} Results Found</h2>
          <div className="sort-filter">
            <select>
              <option>Sort by</option>
              <option>Title</option>
              <option>Date</option>
            </select>
          </div>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
                <div className="blog-date">
                  <span>{blog.date}</span>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="category">{blog.category}</span>
                  <span className="author">By {blog.author}</span>
                  <span className="comments">{blog.comments} Comments</span>
                </div>

                <h4 className="blog-title">{blog.title}</h4>

                <a href={blog.link} className="read-more">
                  Read More <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsList;
