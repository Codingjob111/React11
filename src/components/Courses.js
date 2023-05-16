
import React from 'react';
import './courses.css';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="courses">
      <h2 className="courses__title">Our Programs</h2>
      <div className="course-cards">
        <div className="course-card">
          <div className="course-card__image full-stack"></div>
          <div className="course-card__details">
            <h3 className="course-card__title">Full Stack Development</h3>
            <p className="course-card__description">
              Learn how to develop web applications from scratch using the latest tools and technologies in full stack development. Our program covers both front-end and back-end development, as well as database management and server deployment.
            </p>

       <Link to='/Student'>
          <button className="course-card__button">Enroll Now</button>
          </Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card__image frontend"></div>
          <div className="course-card__details">
            <h3 className="course-card__title">Frontend Development</h3>
            <p className="course-card__description">
              Master the art of creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript. Our program covers all aspects of front-end development, including UI/UX design principles, accessibility, and cross-browser compatibility.
            </p>
            <Link to='/Student'>
            <button className="course-card__button">Enroll Now</button>
            </Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card__image backend"></div>
          <div className="course-card__details">
            <h3 className="course-card__title">Backend Development</h3>
            <p className="course-card__description">
              Learn how to create server-side applications and APIs using popular programming languages like Python, Java, and Node.js. Our program covers database management, web security, and scalability, as well as cloud deployment using platforms like AWS and Google Cloud.
            </p>
            <Link to='/Student'>
            <button className="course-card__button">Enroll Now</button>
            </Link>
          </div>
        </div>
        <div className="course-card">
          <div className="course-card__image internship"></div>
          <div className="course-card__details">
            <h3 className="course-card__title">Internship Programs</h3>
            <p className="course-card__description">
              Gain practical work experience in software development by joining our internship program. You will work on real-world projects, collaborate with experienced developers, and receive mentorship and training to help you launch your career in tech.
            </p>
            <Link to='/Student'>
            <button className="course-card__button">Enroll Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;











/*import React from 'react';
import './courses.css';


const Courses = () => {
  return (
    <section className="courses">
      <div className="course-card">

        <div className="course-card__image full-stack"></div>
        <div className="course-card__content">
          <h2>Full Stack Developer</h2>
          <p>Learn how to build dynamic web applications from front to back.</p>
          <button>Enroll now</button>
        </div>
      </div>
      <div className="course-card">
        <div className="course-card__image backend"></div>
        <div className="course-card__content">
          <h2>Backend Developer</h2>
          <p>Discover how to create robust server-side applications using popular frameworks.</p>
          <button>Enroll now</button>
        </div>
      </div>
      <div className="course-card">
        <div className="course-card__image frontend"></div>
        <div className="course-card__content">
          <h2>Frontend Developer</h2>
          <p>Master the skills to design and develop responsive and interactive user interfaces.</p>
          <button>Enroll now</button>
        </div>

      </div>
    </section>
  );
};

export default Courses;*/
