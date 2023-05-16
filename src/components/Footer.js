import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5>About Us</h5>
            <p>
              We are an online education company providing courses in Full Stack Development,
              Backend Development, and Frontend Development, Internship Program. We provide self-employed training for Work From Home Earning.
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Our Services</h5>
            <ul>
              <li><a href="#">Full Stack Development</a></li>
              <li><a href="#">Backend Development</a></li>
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Internship Program</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <p>
              123 Main St.<br />
              Bangluru, Karnatka, India 10001<br /><br />
              (+91)7017990795<br />
              info@easyjobs.com
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Connect with Us</h5>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="above-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Codingjobs Technology ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;














/*import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>We are an online education company providing courses in Full Stack Development, Backend Development, and Frontend Development,Internship Program,We Provide Self Employed traning for Work From Home Earning..</p>
          </div>
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul>
              <li><a href="#">Full Stack Development</a></li>
              <li><a href="#">Backend Development</a></li>
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Internship Program</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>123 Main St.<br />Bangluru,Karnatka, India 10001<br /><br />(+91)7017990795<br />info@easyjobs.com</p>
          </div>
          <div className="col-md-3">
            <h5>Connect with Us</h5>
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="above-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>&copy; 2023 Codingjobs Technology ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
*/


