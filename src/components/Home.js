import React, { useState } from 'react';
import './Home.css';
import Home1 from './Home1';

const studentData = [
  { name: 'Mohit Rana', company: 'ABC Corporation',profession:'Full Stack Developer ' },
  { name: 'Sachin singh', company: 'XYZ Inc.',profession:'Backend  Developer ' },
  { name: 'Neha Sharma', company: '123 Industries ', profession:"Frontend Developer" },
  { name: 'Ankit', company: 'Google',profession:"Frontend Developer" },
  { name: 'Akash singh', company: 'linkdln.',profession:"Frontend Developer" },
  { name: 'Abash Sharma', company: 'Zomato',profession:"Frontend Developer" },
  { name: 'Naina chandel', company: 'xyz Solution',profession:"Backend Developer" },
  { name: 'Titu nain', company: 'XYZ Inc.', profession:"FullStack Developer"},
  { name: 'Neha Sharma', company: 'DEF enterprises' ,profession:"FullStack Developer" },
  { name: 'anshul Rana', company: 'PQR innovation',profession:"FullStack Developer" },
  { name: 'Devash aggarwal', company: 'MNO system.',profession:"Frontend Developer" },
  { name: 'Anshika malik', company: 'GHI technology',profession:"Backend Developer" },


  { name: 'Mohit Rana', company: 'STU Solution', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },


  // Student data array remains the same
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(activeIndex === studentData.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? studentData.length - 1 : activeIndex - 1);
  };

  return (
    <div>

      <div className="slider-container">

        {studentData.map((student, index) => (
          <div
            className={index === activeIndex ? 'slide active' : 'slide'}
            key={index}
          >
            <h2>{student.name}</h2>
            <p>{student.company}</p>
            <p>{student.profession}</p>
          </div>
        ))}
        <button className="prev-arrow" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next-arrow" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <div className="dot-indicator">
        {studentData.map((student, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'dot active-dot' : 'dot'}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
      <Home1 />
    </div>
  );
}

export default Home;


































/*

import React, { useState } from 'react';
import './Home.css';
import Home1 from './Home1';

const studentData = [
  { name: 'Mohit Rana', company: 'ABC Corporation',profession:'Full Stack Developer ' },
  { name: 'Sachin singh', company: 'XYZ Inc.',profession:'Backend  Developer ' },
  { name: 'Neha Sharma', company: '123 Industries ', profession:"Frontend Developer" },
  { name: 'Ankit', company: 'Google',profession:"Frontend Developer" },
  { name: 'Akash singh', company: 'linkdln.',profession:"Frontend Developer" },
  { name: 'Abash Sharma', company: 'Zomato',profession:"Frontend Developer" },
  { name: 'Naina chandel', company: 'xyz Solution',profession:"Backend Developer" },
  { name: 'Titu nain', company: 'XYZ Inc.', profession:"FullStack Developer"},
  { name: 'Neha Sharma', company: 'DEF enterprises' ,profession:"FullStack Developer" },
  { name: 'anshul Rana', company: 'PQR innovation',profession:"FullStack Developer" },
  { name: 'Devash aggarwal', company: 'MNO system.',profession:"Frontend Developer" },
  { name: 'Anshika malik', company: 'GHI technology',profession:"Backend Developer" },


  { name: 'Mohit Rana', company: 'STU Solution', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },
  { name: 'Mohit Rana', company: 'ABC Corporation', },
  { name: 'Sachin singh', company: 'XYZ Inc.' },
  { name: 'Neha Sharma', company: '123 Industries' },


  // Add more student data here
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(activeIndex === studentData.length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? studentData.length - 1 : activeIndex - 1);
  };

  return (
    <div>
      <h1>Our Placed Students!</h1>
      <div className="slider-container">
        {studentData.map((student, index) => (
          <div
            className={index === activeIndex ? 'slide active' : 'slide'}
            key={index}
          >
            <h2>{student.name}</h2>
            <p>{student.company}</p>
            <p>{student.profession}</p>
          </div>
        ))}
        <button className="prev-arrow" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next-arrow" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <div className="dot-indicator">
        {studentData.map((student, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'dot active-dot' : 'dot'}
            onClick={() => setActiveIndex(index)}
          >


          </span>
          
        ))}
        
      </div>
      <Home1/>
    </div>
  );
}

export default Home; 
*/




