import React from 'react';
import './ExpertsTeacher.css';
import img1 from '../images/im3.jpg';
import img3 from '../images/im1.jpg'
import img2 from '../images/im2.jpg'

const ExpertsTeachers = () => {
  return (
    <section className="experts-teachers">
      <h2 className="section-title">Meet Our Expert Teachers</h2>
      <div className="teachers-container">
        <div className="teacher-card">
          <img src={img1} alt="Teacher 1" className="teacher-image" />
          <h3 className="teacher-name">John Smith</h3>
          <p className="teacher-title">Full-Stack Developer</p>
          <p className="teacher-description">John is an experienced full-stack developer with a passion for teaching others. He has worked on numerous projects across various industries and enjoys sharing his knowledge with his students.</p>
        </div>
        <div className="teacher-card">
          <img src={img3} alt="Teacher 2" className="teacher-image" />
          <h3 className="teacher-name">Sarah Johnson</h3>
          <p className="teacher-title">Frontend Developer</p>
          <p className="teacher-description">Sarah is a talented frontend developer who loves creating beautiful and responsive user interfaces. She has a keen eye for design and is always looking for new ways to improve her skills.</p>
        </div>
        <div className="teacher-card">
          <img src={img2} alt="Teacher 3" className="teacher-image" />
          <h3 className="teacher-name">David Lee</h3>
          <p className="teacher-title">Backend Developer</p>
          <p className="teacher-description">David is a skilled backend developer with expertise in database design and optimization. He is passionate about building scalable and secure web applications and enjoys teaching others how to do the same.</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertsTeachers;
