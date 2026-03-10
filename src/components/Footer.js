import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Har Har Mahadev</h3>
          <p>Thanks for visiting this humble tribute to Shiva.</p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <div className="footer-link-grid">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/family">Family</Link>
            <Link to="/avatar">Avatar</Link>
            <Link to="/jyotirlingas">Jyotirlingas</Link>
            <Link to="/kedars">Kedars</Link>
            <Link to="/amarnath">Amarnath</Link>
          </div>
        </div>

        <div className="footer-meta">
          <p className="blessing">May Shiva's grace guide your journey.</p>
          <p className="copyright">© {year} Kaushal Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

