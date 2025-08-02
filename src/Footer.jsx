import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-widget">
              <h5>Portfolio</h5>
              <p>
                I'm a passionate full-stack developer creating digital solutions 
                that make a difference. Let's build something amazing together.
              </p>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-widget">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/service">Services</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li><a href="#web">Web Development</a></li>
                <li><a href="#mobile">Mobile Apps</a></li>
                <li><a href="#ui">UI/UX Design</a></li>
                <li><a href="#consulting">Consulting</a></li>
                <li><a href="#maintenance">Maintenance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5>Contact Info</h5>
              <ul className="list-unstyled contact-info">
                <li>
                  <i className="fas fa-envelope"></i>
                  harsh@example.com
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  +91 12345 67890
                </li>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  India
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  Mon - Fri: 9:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="footer-divider" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="copyright mb-0">
              &copy; 2024 Portfolio. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              Made with <i className="fas fa-heart text-danger"></i> by Harsh Technical
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}