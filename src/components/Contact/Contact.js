import React from 'react';
import './contact.css';

const Contact = () => (
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
                <p>optiverseitsolution@gmail.com</p>
                <a href="mailto:optiverseitsolution@gmail.com" className="contact-link">Send Email</a>
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
);

export default Contact;
