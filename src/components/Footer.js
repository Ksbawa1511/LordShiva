import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const footerGroups = [
  {
    title: 'Discover',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/family', label: 'Family' },
      { to: '/avatar', label: 'Avatar' },
    ],
  },
  {
    title: 'Pilgrimage',
    links: [
      { to: '/jyotirlingas', label: 'Jyotirlingas' },
      { to: '/kedars', label: 'Panch Kedars' },
      { to: '/amarnath', label: 'Amarnath' },
      { to: '/temples', label: 'Temples' },
      { to: '/panchkalash', label: 'Panch Kalash' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { to: '/mantras', label: 'Mantras' },
      { to: '/festivals', label: 'Festivals' },
      { to: '/stories', label: 'Stories' },
      { to: '/resources', label: 'Resources' },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Lord Shiva</Link>
            <p className="footer-tagline">A humble tribute to Mahadev — divine wisdom, sacred sites, and devotion.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title} className="footer-col">
                <h4 className="footer-col-title">{group.title}</h4>
                <ul className="footer-links">
                  {group.links.map(({ to, label }) => (
                    <li key={to}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-blessing">Har Har Mahadev · May Shiva's grace guide your journey.</p>
          <p className="footer-copyright">© {year} Kaushal Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
