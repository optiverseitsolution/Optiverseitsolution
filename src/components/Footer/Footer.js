import React from 'react';
import logo from '../../assets/logo new.png';
import './Footer.css';

const Footer = ({ theme, toggleTheme }) => (
  <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="footer-logo-wrapper">
                <div className="footer-logo-img-container">
                  <img 
                    src={logo} 
                    alt="Optiverse Logo" 
                    className="footer-logo-img"
                  />
                </div>
                <div className="footer-tagline">
                  <h3 className="footer-company-name">Optiverse I.T. Solution Pvt. Ltd.</h3>
                  <p className="footer-slogan">Digital success in tomorrow's world</p>
                </div>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                {/* <li><a href="#portfolio">Portfolio</a></li> */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-services">
              <h4>Our Services</h4>
              <ul>
                <li>Web Development</li>
                <li>Social Media Marketing</li>
                <li>Custom Software Solutions</li>
                <li>Digital Strategy Consulting</li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <p><i className="fas fa-envelope"></i> optiversesolution@gmail.com</p>
              <p><i className="fas fa-phone"></i> +977 9803713931</p>
              <div className="social-links">
                <a href="#asd" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#asd" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#asd" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#asd" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="theme-toggle-footer">
                <button className="theme-toggle-small" onClick={toggleTheme} aria-label="Toggle theme">
                  {theme === 'light' ? (
                    <i className="fas fa-moon"></i>
                  ) : (
                    <i className="fas fa-sun"></i>
                  )}
                </button>
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Optiverse I.T. Solution Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
);

export default Footer;
