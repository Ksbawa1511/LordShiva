import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ theme = 'light', onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/family', label: 'Family' },
    { to: '/avatar', label: 'Avatar' },
    { to: '/jyotirlingas', label: 'Jyotirlingas' },
    { to: '/kedars', label: 'Kedars' },
    { to: '/amarnath', label: 'Amarnath' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <NavLink to="/" className="logo">
          Lord Shiva
        </NavLink>
        <div className="nav-right">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => onToggleTheme?.()}
            aria-label="Toggle theme"
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            <span className="theme-icon">{theme === 'dark' ? '☀' : '☽'}</span>
          </button>
          <button
            type="button"
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

