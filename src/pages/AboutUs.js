import React from 'react';
import john from '../assets/johndoe.jpg';
import johnsmith from '../assets/janesmith.jpg';
import emilyjohnson from '../assets/emilyjohnson.jpg';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p> Our mission is to provide fresh and high-quality vegetables directly to your doorstep. We believe in promoting healthy eating habits by making it easier for people to access organic and locally grown produce.</p>
      </section>

      <section className="about-us-vision">
        <h2>Our Vision</h2>
        <p> We envision a world where everyone has access to fresh, healthy, and sustainable food.We strive to support local farmers and reduce the carbon footprint of food distribution. </p>
      </section>

      <section className="about-us-history">
        <h2>Our Story</h2>
        <p>Our journey started in 2020 with a small farm and a big dream. We wanted to change the way people shop for vegetables by offering a convenient and trustworthy service. What started as a local project has now grown into a dedicated team committed to delivering fresh produce every day.</p>
      </section>

      <section className=" row about-us-team">
        <h2>Meet the Team</h2>
        <div className=" col-sm-4 team-member">
          <img src={john} alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className=" col-sm-4 team-member">
          <img src={johnsmith} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Head of Operations</p>
        </div>
        <div className="col-sm-4 team-member">
          <img src={emilyjohnson} alt="Team Member 3" />
          <h3>Emily Johnson</h3>
          <p>Marketing Specialist</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

