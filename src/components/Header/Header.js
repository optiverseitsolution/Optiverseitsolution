import React, { useState } from 'react';
import logo from '../../assets/logo new.png';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <div className="logo-circle">
              <img src={logo} alt="Optiverse Logo" className="logo-image" />
            </div>
            <div className="logo-tagline">
              <span className="it-text">Optiverse I.T. Solution Pvt. Ltd.</span>
              <span className="tagline">Digital success in tomorrow's world</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" onClick={toggleServicesDropdown}>
                  Services <i className={`fas ${servicesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                  <a href="#web-dev" className="dropdown-item" onClick={closeMobileMenu}>Web Development</a>
                  <a href="#social-media" className="dropdown-item" onClick={closeMobileMenu}>Social Media Marketing</a>
                  <a href="#consulting" className="dropdown-item" onClick={closeMobileMenu}>Consulting</a>
                  <a href="#support" className="dropdown-item" onClick={closeMobileMenu}>IT Support</a>
                </div>
              </li>
              <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>
            <a href="tel:+9779803713931" className="btn-call"><i className="fas fa-phone"></i><span>Call Now</span></a>
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
         {mobileMenuOpen && (
  <div className="mobile-nav open">
    <ul className="mobile-nav-list">
      <li className="mobile-nav-item">
        <a className="mobile-nav-link" href="#home" onClick={closeMobileMenu}>Home</a>
      </li>

      <li className="mobile-nav-item">
        <button
          type="button"
          className="mobile-nav-link"
          onClick={toggleServicesDropdown}
        >
          <span>Services</span>
          <i className={`fas ${servicesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>

        <div className={`mobile-dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
          <a className="mobile-dropdown-item" href="#web-dev" onClick={closeMobileMenu}>Web Development</a>
          <a className="mobile-dropdown-item" href="#social-media" onClick={closeMobileMenu}>Social Media Marketing</a>
          <a className="mobile-dropdown-item" href="#consulting" onClick={closeMobileMenu}>Consulting</a>
          <a className="mobile-dropdown-item" href="#support" onClick={closeMobileMenu}>IT Support</a>
        </div>
      </li>

      <li className="mobile-nav-item">
        <a className="mobile-nav-link" href="#about" onClick={closeMobileMenu}>About Us</a>
      </li>

      <li className="mobile-nav-item">
        <a className="mobile-nav-link" href="#contact" onClick={closeMobileMenu}>Contact</a>
      </li>
    </ul>
  </div>
)}
      </div>
    </header>
  );
};

export default Header;
