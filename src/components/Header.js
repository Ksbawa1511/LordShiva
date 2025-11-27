import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="left">
          <Link to="/">Lord Shiva</Link>
        </div>
        <div className="right">
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={isMenuOpen ? 'active' : ''}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/avatar" onClick={closeMenu}>Avatar</Link>
            </li>
            <li>
              <Link to="/jyotirlingas" onClick={closeMenu}>Jyotirlingas</Link>
            </li>
            <li>
              <Link to="/kedars" onClick={closeMenu}>Kedars</Link>
            </li>
            <li>
              <Link to="/amarnath" onClick={closeMenu}>Amarnath</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

