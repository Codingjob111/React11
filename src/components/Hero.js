import React from 'react';

import './Hero.css';
import Testimonial from './Testimonials';
import Features from './Features';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
    <section className="hero">
     
      <div className="hero__content">
        <h1>Learn Programming Anytime, At Our Plateform</h1>
        <p>Discover thousands of programming courses taught by industry experts.</p>
     
        <Link to='/Courses'className="btn btn-primary" >Get Started</Link>
      </div>
    
    </section>
 
     <Testimonial/>
    <Features/>
     </div>
  );
};

export default Hero;
