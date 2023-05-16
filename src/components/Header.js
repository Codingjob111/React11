import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Header.css';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const { logout } = useAuth0();
  const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <header className="header">
      <div className="header__logo">

        <Link to="/Hero">Workhub</Link>

      </div>

      {isMobile ? (
        // Render mobile-friendly navigation menu
        <nav className="header__nav">
          <ul>
            <li>
              <Link to='/Lookingjob'>Looking Job</Link>
            </li>

            <li>
              <Link to="/PlacementDetail">Placement</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <div className="header__nav">
                <ul>
                  {isAuthenticated ? (
                    <li>
                      <Link to="/Courses"
                        onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/Courses" onClick={() => loginWithRedirect()}>Log In</Link>
                    </li>
                  )}
                </ul>
              </div>


            </li>




          </ul>
        </nav>
      ) : (


        // Render desktop navigation menu
        <nav className="header__nav">
          <ul>

            <li>
              <Link to='/Lookingjob'>Looking Job</Link>
            </li>




            <li>
              <Link to="/PlacementDetail">Placement</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>

              <div className="header__nav">
                <ul>
                  {isAuthenticated ? (
                    <li>
                      <Link to="/Courses"
                        onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/Courses" onClick={() => loginWithRedirect()}>Log In</Link>
                    </li>
                  )}
                </ul>
              </div>






            </li>





          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;




















/*import React from 'react';
import { Link } from 'react-router-dom';
import  './Header.css';
import { useAuth0 } from '@auth0/auth0-react';


const Header = () => {

  const { loginWithRedirect,isAuthenticated } = useAuth0();

  const { logout } = useAuth0();


  return (

    <header className="header">
    <div className="header__logo">
        <Link to="/Hero">NaukriDheko</Link>
      </div>
      <nav className="header__nav">
        <ul>

        <li>
            <Link to="/PlacementDetail">Placement</Link>
          </li>




        <li>
            <Link to="/Home">Home</Link>
          </li>


          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/FeedbackForm">Feedback</Link>
          </li>

               </ul>
      </nav>

      <div className="header__nav">
   <ul>
   {isAuthenticated ? (
            <li>
              <Link to="/Courses"
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/Courses" onClick={() => loginWithRedirect()}>Log In</Link>
            </li>
          )}
 </ul>
 </div>


    </header>
  );
};

export default Header; */

