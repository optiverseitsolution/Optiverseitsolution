import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/logo.png';
const App = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('optiverse-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('optiverse-theme', newTheme);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close services dropdown when closing mobile menu
    if (mobileMenuOpen) {
      setServicesDropdownOpen(false);
    }
  };

  // Toggle services dropdown
  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Service data
  const webServices = [
    "CUSTOM WEBSITE DEVELOPMENT",
    "EDUCATIONAL/CONSULTANCES WEBSITE",
    "BOOKING AND APPOINTMENT SYSTEM",
    "E-COMMERCE WEBSITE",
    "HEALTH CARE WEBSITE",
    "NEWS PORTAL AND BUSINESS PROTOCOL WEBSITE",
    "RESPONSIVE WEB DEVELOPMENT",
    "SEO & SPEED OPTIMIZATION"
  ];

  const marketingServices = [
    "PAGE SETUP AND HANDLING",
    "ADVERTISEMENT AND META ADS CAMPAIGN",
    "CUSTOM AND CREATIVE GRAPHICS",
    "CONTENT WRITING AND SCHEDULING",
    "ENGAGING CONTENT CREATION",
    "SOCIAL MEDIA MANAGEMENT STRATEGY AND PLANNING"
  ];

  // New services from the image
  const socialMediaServices = [
    "SOCIAL MEDIA MANAGEMENT",
    "BRAND STRATEGY DEVELOPMENT",
    "CONTENT CALENDAR PLANNING",
    "COMMUNITY MANAGEMENT",
    "SOCIAL MEDIA AUDIT & ANALYSIS",
    "INFLUENCER COLLABORATIONS"
  ];

  const videoProductionServices = [
    "VIDEO PRODUCTION & REELS CREATION",
    "PROFESSIONAL VIDEO EDITING",
    "MOTION GRAPHICS & ANIMATIONS",
    "VIDEO MARKETING STRATEGY",
    "CORPORATE VIDEO PRODUCTION",
    "PRODUCT DEMO VIDEOS"
  ];


  return (
    <div className={`app ${theme}`}>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="header-container">
            {/* Logo */}

            <div className="logo">
            <div className="logo-circle">
              <img 
                src={logo} 
                alt="Optiverse Logo" 
                className="logo-image"
              />
            </div>
            <div className="logo-tagline">
              <span className="it-text">Optiverse I.T. Solution Pvt. Ltd.</span>
              <span className="tagline">Digital success in tomorrow's world</span>
            </div>
          </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#home" className="nav-link active">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <button 
                    className="nav-link dropdown-toggle"
                    onClick={toggleServicesDropdown}
                    aria-expanded={servicesDropdownOpen}
                  >
                     Services <i className={`fas ${servicesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </button>
                  <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                    <a href="#web-dev" className="dropdown-item" onClick={() => { setActiveTab('web'); closeMobileMenu(); }}>
                      <i className="fas fa-code"></i> Web Development
                    </a>
                    <a href="#social-media" className="dropdown-item" onClick={() => { setActiveTab('marketing'); closeMobileMenu(); }}>
                      <i className="fas fa-bullhorn"></i> Social Media Marketing
                      <span className="nav-badge">20% Off</span>
                    </a>
                    <a href="#consulting" className="dropdown-item" onClick={closeMobileMenu}>
                      <i className="fas fa-chart-line"></i> Consulting
                    </a>
                    <a href="#support" className="dropdown-item" onClick={closeMobileMenu}>
                      <i className="fas fa-headset"></i> IT Support
                    </a>
                  </div>
                </li>

                
                <li className="nav-item">
                  <a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a>
                </li>
                {/* <li className="nav-item">
                  <a href="#portfolio" className="nav-link" onClick={closeMobileMenu}>Portfolio</a>
                </li> */}
                <li className="nav-item">
                  <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
                </li>
              </ul>
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? (
                  <i className="fas fa-moon"></i>
                ) : (
                  <i className="fas fa-sun"></i>
                )}
              </button>
              <a href="tel:+9779803713931" className="btn-call">
                <i className="fas fa-phone"></i>
                <span>Call Now</span>
              </a>
              <button 
                className="mobile-menu-toggle" 
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <a href="#home" className="mobile-nav-link active" onClick={closeMobileMenu}>
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li className="mobile-nav-item">
                <button 
                  className="mobile-nav-link dropdown-toggle"
                  onClick={toggleServicesDropdown}
                  aria-expanded={servicesDropdownOpen}
                >
                  <i className="fas fa-cogs"></i> Services
                  <i className={`fas ${servicesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                <div className={`mobile-dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                  <a href="#web-dev" className="mobile-dropdown-item" onClick={() => { setActiveTab('web'); closeMobileMenu(); }}>
                    <i className="fas fa-code"></i> Web Development
                  </a>
                  <a href="#social-media" className="mobile-dropdown-item" onClick={() => { setActiveTab('marketing'); closeMobileMenu(); }}>
                    <i className="fas fa-bullhorn"></i> Social Media Marketing
                    <span className="nav-badge">20% Off</span>
                  </a>
                  <a href="#consulting" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    <i className="fas fa-chart-line"></i> Consulting
                  </a>
                  <a href="#support" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                    <i className="fas fa-headset"></i> IT Support
                  </a>
                </div>
              </li>
              <li className="mobile-nav-item">
                <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
                  <i className="fas fa-info-circle"></i> About Us
                </a>
              </li>
              {/* <li className="mobile-nav-item">
                <a href="#portfolio" className="mobile-nav-link" onClick={closeMobileMenu}>
                  <i className="fas fa-briefcase"></i> Portfolio
                </a>
              </li> */}
              <li className="mobile-nav-item">
                <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
              <li className="mobile-nav-item contact-info-mobile">
                <div className="mobile-contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>optiversesolution@gmail.com</span>
                </div>
                <div className="mobile-contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+977 9803713931</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Digital Success in Tomorrow's World</h1>
            <p>Transforming your business with cutting-edge digital solutions tailored to your needs.</p>
            <div className="cta-buttons">
              <a href="#services" className="btn-primary">Explore Our Services</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* Services Section - Updated with 4 tabs */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>We offer comprehensive digital solutions to help your business thrive in the digital age.</p>
          </div>

          {/* Service Tabs - Now with 4 tabs */}
          <div className="service-tabs">
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => setActiveTab('web')}
              >
                <i className="fas fa-code"></i>
                <span>Web Development</span>
                <span className="discount-badge">20% Off</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'social' ? 'active' : ''}`}
                onClick={() => setActiveTab('social')}
              >
                <i className="fas fa-users"></i>
                <span>Social Media Management</span>
                <span className="discount-badge">20% Off</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveTab('video')}
              >
                <i className="fas fa-video"></i>
                <span>Video Production</span>
                <span className="discount-badge">20% Off</span>
              </button>
              <button 
                className={`tab-btn ${activeTab === 'marketing' ? 'active' : ''}`}
                onClick={() => setActiveTab('marketing')}
              >
                <i className="fas fa-bullhorn"></i>
                <span>Digital Marketing</span>
                <span className="discount-badge">20% Off</span>
              </button>
            </div>

            {/* Tab Content - Updated for 4 tabs */}
            <div className="tab-content">
              {activeTab === 'web' ? (
                <div className="service-list">
                  <h3><i className="fas fa-desktop"></i> Web Development Services</h3>
                  <ul>
                    {webServices.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="discount-notice">
                    <i className="fas fa-tag"></i>
                    <span>Special Offer: <strong>20% OFF</strong> on all web development packages!</span>
                  </div>
                </div>
              ) : activeTab === 'social' ? (
                <div className="service-list">
                  <h3><i className="fas fa-users"></i> Social Media Management Services</h3>
                  <ul>
                    {socialMediaServices.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="discount-notice">
                    <i className="fas fa-tag"></i>
                    <span>Special Offer: <strong>20% OFF</strong> on all social media management packages!</span>
                  </div>
                </div>
              ) : activeTab === 'video' ? (
                <div className="service-list">
                  <h3><i className="fas fa-video"></i> Video Production Services</h3>
                  <ul>
                    {videoProductionServices.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="discount-notice">
                    <i className="fas fa-tag"></i>
                    <span>Special Offer: <strong>20% OFF</strong> on all video production packages for 6 months!</span>
                  </div>
                </div>
              ) : (
                <div className="service-list">
                  <h3><i className="fas fa-chart-line"></i> Digital Marketing Services</h3>
                  <ul>
                    {marketingServices.map((service, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle"></i>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="discount-notice">
                    <i className="fas fa-tag"></i>
                    <span>Special Offer: <strong>20% OFF</strong> on all digital marketing packages!</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>About Optiverse</h2>
            <p>Leading the digital transformation journey for businesses worldwide</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Your Partner in Digital Innovation</h3>
              <p>Optiverse I.T. Solution Pvt. Ltd. is a premier digital solutions provider dedicated to helping businesses achieve success in the digital world. With expertise in web development, social media marketing, and comprehensive IT solutions, we empower businesses to reach their full potential.</p>
              <p>Our team of experienced professionals combines technical expertise with creative innovation to deliver solutions that drive results and exceed expectations.</p>
              <a href="#contact" className="btn-primary">Work With Us</a>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Services Support </div>
              </div>
              {/* <div className="stat-card">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years in Digital Services </div>
              </div> */}
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Our Portfolio</h2>
            <p>Discover some of our recent projects and success stories</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-img web-dev">
                <div className="portfolio-overlay">
                  <h4>E-Commerce Platform</h4>
                  <p>Full-featured online shopping solution</p>
                </div>
              </div>
              <h3>E-Commerce Development</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-img social-media">
                <div className="portfolio-overlay">
                  <h4>Social Media Campaign</h4>
                  <p>Brand awareness and engagement</p>
                </div>
              </div>
              <h3>Social Media Marketing</h3>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-img consulting">
                <div className="portfolio-overlay">
                  <h4>Business Consulting</h4>
                  <p>Digital transformation strategy</p>
                </div>
              </div>
              <h3>IT Consulting</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
            <p>Ready to take your business to the next level? Get in touch with us today!</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>optiversesolution@gmail.com</p>
                <a href="mailto:optiversesolution@gmail.com" className="contact-link">Send Email</a>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone</h3>
                <p>+977 9803713931</p>
                <a href="tel:+9779803713931" className="contact-link">Call Now</a>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Business Hours</h3>
                <p>Sunday - Friday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Location</h3>
                <p>Lalitpur, Nepal</p>
              </div>
            </div>
            
            <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form action="https://formspree.io/f/mdkqzzbl" method="POST">
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
                 <div className="form-group">
                  <select name="service" required>
                    <option value="">Select Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="social-media-management">Social Media Management</option>
                    <option value="video-production">Video Production & Reels</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media-marketing">Social Media Marketing</option>
                    <option value="seo-optimization">SEO & Speed Optimization</option>
                    <option value="graphics-design">Custom & Creative Graphics</option>
                    <option value="content-writing">Content Writing & Scheduling</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="it-support">IT Support</option>
                    <option value="booking-system">Booking & Appointment System</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="healthcare">Healthcare Website</option>
                    <option value="news-portal">News Portal & Business Protocol</option>
                    <option value="educational">Educational/Consultancy Website</option>
                    <option value="custom-website">Custom Website Development</option>
                    <option value="other">Other (Please specify in message)</option>
                  </select>
                </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>

          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p><i className="fas fa-envelope"></i> optiverseitsolution@gmail.com</p>
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
    </div>
  );
};

export default App;
