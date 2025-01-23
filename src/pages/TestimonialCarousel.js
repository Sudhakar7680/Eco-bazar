import React from 'react';
import robert from '../assets/robert.png';
import dianne from '../assets/dianne.png';
import eleanor from '../assets/eleanor.png';
import starIcon from '../assets/star.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialCarousel.css';

const testimonials = [
  {
    id: 1,
    name: 'Robert Fox',
    role: 'Customer',
    image: robert,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dianne Russell',
    role: 'Customer',
    image: dianne,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Eleanor Pena',
    role: 'Customer',
    image: eleanor,
    text: 'Pellentesque eu nibh eget mauris congue mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales.',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true, // Pagination dots
    infinite: true, // Infinite loop
    speed: 500,
    slidesToShow: 3, // Number of visible slides
    slidesToScroll: 1,
    arrows: true, // Navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-carousel">
      <h2>Client Testimonial</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-quote">“</div>
            <p>{testimonial.text}</p>
            <div className="testimonial-info">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
                <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <img key={index} src={starIcon} alt="star" className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
