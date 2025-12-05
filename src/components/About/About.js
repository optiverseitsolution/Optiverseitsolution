import React from 'react';
import './About.css';
const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="section-header">
        <h2>About Optiverse</h2>
        <p>Leading the digital transformation journey for businesses worldwide</p>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h3>Your Partner in Digital Innovation</h3>
          <p>Optiverse I.T. Solution Pvt. Ltd. is a premier digital solutions provider dedicated to helping businesses achieve success in the digital world...</p>
          <a href="#contact" className="btn-primary">Work With Us</a>
        </div>
        <div className="about-stats">
          <div className="stat-card"><div className="stat-number">20+</div><div className="stat-label">Clients</div></div>
          <div className="stat-card"><div className="stat-number">100%</div><div className="stat-label">Services Support</div></div>
          <div className="stat-card"><div className="stat-number">1+</div><div className="stat-label">Years in Digital Services</div></div>
          <div className="stat-card"><div className="stat-number">24/7</div><div className="stat-label">Support Available</div></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
