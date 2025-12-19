import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('web');

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
  );
};

export default Services;
