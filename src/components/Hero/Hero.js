import React from 'react';
import './Hero.css';

const Hero = () => (
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
);

export default Hero;
