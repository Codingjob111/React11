import React from 'react';
import './About.css';
import image from '../images/imm.jpg'

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>About Us</h2>
        <p>We are a team of passionate educators dedicated to providing quality education to students around the world.</p>
        <p>Our mission is to empower learners to achieve their goals and pursue their passions through accessible, flexible, and personalized learning experiences.</p>
        <Link to='/Events'className="btn btn-primary" >Learn More</Link>
      </div>
      <div className="about-right">
        <img src={image}alt="About Us" />
      </div>
    </div>
  );
};

export default About;




