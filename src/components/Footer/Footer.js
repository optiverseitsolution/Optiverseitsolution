import React from 'react';
import logo from '../../assets/logo new.png';
import './Footer.css';

const Footer = ({ theme, toggleTheme }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Optiverse Logo" />
          <div className="footer-tagline">
            <h3>Optiverse I.T. Solution Pvt. Ltd.</h3>
            <p>Digital success in tomorrow's world</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
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
          <p>Email: optiversesolution@gmail.com</p>
          <p>Phone: +977 9803713931</p>
          <button onClick={toggleTheme}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Optiverse I.T. Solution Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
