import React from 'react';
import './Feature.css';
import ExpertsTeachers from './ExpertsTeacher';

const Features = () => {
  return (
    <section id="features">
      <ExpertsTeachers />
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">

          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-video-camera fa-3x"></i>
              <h3>Online Learning</h3>
              <p>Learn on your schedule with our online courses.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-user fa-3x"></i>
              <h3>Individual Attention</h3>
              <p>Get personalized feedback and attention from our expert teachers.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-laptop fa-3x"></i>
              <h3>Hands-on Experience</h3>
              <p>Practice what you learn with real-world projects and assignments.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-certificate fa-3x"></i>
              <h3>Freelancer</h3>
              <p>"Freelancing offers students a unique opportunity to develop valuable skills ."</p>
            </div>
          </div>



          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-comments fa-3x"></i>
              <h3>Community Support</h3>
              <p>Connect with other students and our community of learners.</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="feature-box">
              <i className="fa fa-certificate fa-3x"></i>
              <h3>Certification</h3>
              <p>Earn a certificate upon completion of our courses.</p>
            </div>
          </div>







        </div>
      </div>
    </section>
  );
};

export default Features;


