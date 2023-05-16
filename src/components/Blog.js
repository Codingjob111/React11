import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h1>Our Latest Blog</h1>
              <p>Stay up to date with the latest news and trends in education.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="blog-item desktop">
              <div className="blog-img">
                {/* Add desktop-specific content here */}
              </div>
              <div className="blog-content">
                <h3>Top programming languages to learn in 2023</h3>
                <p>Programming is a vital skill in today's job market, and learning the right language can make all the difference. In this blog post, we'll discuss the top JavaScript programming languages to learn in 2023.</p>
                <Link to="./FeedbackForm" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                {/* Add mobile-specific content here */}
              </div>
              <div className="blog-content">
                <h3>The benefits of learning a new language</h3>
                <p>Learning a new language can be challenging, but it's also incredibly rewarding. In this blog post, we'll explore the many benefits of learning a new language and how it can open up new opportunities in your personal and professional life.</p>
                <Link to="./" className="btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-item">
              <div className="blog-img">
                {/* Add mobile-specific content here */}
              </div>
              <div className="blog-content">
                <h3>5 tips for staying motivated while learning online</h3>
                <p>Learning online has become increasingly popular in recent years, but it can also be challenging to stay motivated and focused. In this blog post, we'll provide you with 5 tips for staying motivated while learning online.</p>
                <Link to="./" className="btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

