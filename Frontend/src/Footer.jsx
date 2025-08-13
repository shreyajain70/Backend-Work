import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Company Info */}
      <div className="footer-section company-info">
        <h2 className="footer-logo">YourCompany</h2>
        <p>Building quality products for a better future.</p>
        <Link to={"/AdminDashBoard"}>
        <button className="footer-button">Admin</button>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact & Social */}
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: contact@yourcompany.com</p>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:contact@yourcompany.com"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
