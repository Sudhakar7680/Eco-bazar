import React from 'react';
import './Blogs.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Choosing Organic Products',
    date: 'November 20, 2024',
    excerpt: 'Organic products are better for the environment and our health. Learn why switching to organic is a great choice for a sustainable future.',
  },
  {
    id: 2,
    title: '10 Easy Ways to Reduce Your Carbon Footprint',
    date: 'November 15, 2024',
    excerpt: 'Small steps can make a big difference! Check out these simple tips to lower your carbon footprint and live a greener life.',
  },
  {
    id: 3,
    title: 'Understanding the Impact of Plastic Waste',
    date: 'November 10, 2024',
    excerpt: 'Plastic pollution is one of the biggest threats to our planet. Discover the impact of plastic waste and how you can contribute to reducing it.',
  },
  {
    id: 4,
    title: 'Eco-Friendly Gift Ideas for Every Occasion',
    date: 'November 5, 2024',
    excerpt: 'Looking for sustainable gift ideas? Here are some thoughtful and eco-friendly gifts perfect for any occasion.',
  },
];

const Blogs = () => {
  return (
    <div className="blog-page">
      <h1>EcoBazar Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.excerpt}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

