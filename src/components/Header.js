import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const mainNav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/family', label: 'Family' },
  { to: '/jyotirlingas', label: 'Jyotirlingas' },
  { to: '/kedars', label: 'Kedars' },
  { to: '/amarnath', label: 'Amarnath' },
];

const exploreSections = [
  {
    title: 'Discover',
    links: [
      { to: '/avatar', label: 'Avatar' },
    ],
  },
  {
    title: 'Pilgrimage',
    links: [
      { to: '/temples', label: 'Temples' },
      { to: '/panchkalash', label: 'Panch Kalash' },
    ],
  },
  {
    title: 'Devotion',
    links: [
      { to: '/mantras', label: 'Mantras' },
      { to: '/festivals', label: 'Festivals' },
      { to: '/stories', label: 'Stories' },
      { to: '/resources', label: 'Resources' },
    ],
  },
];

const allExplorePaths = exploreSections.flatMap((s) => s.links.map((l) => l.to));

const Header = ({ theme = 'light', onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const exploreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setExploreOpen(false);
  }, [location]);

  useEffect(() => {
    if (!exploreOpen) return;
    const handleClickOutside = (e) => {
      if (exploreRef.current && !exploreRef.current.contains(e.target)) setExploreOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [exploreOpen]);

  const isExploreActive = allExplorePaths.includes(location.pathname);

  const closeAll = () => {
    setIsMenuOpen(false);
    setExploreOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <nav className="nav" aria-label="Main navigation">
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
            <span className="theme-icon" aria-hidden>{theme === 'dark' ? '☀' : '☽'}</span>
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
            {mainNav.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-explore-wrap" ref={exploreRef}>
              <button
                type="button"
                className={`explore-trigger ${exploreOpen ? 'open' : ''} ${isExploreActive ? 'active' : ''}`}
                onClick={() => setExploreOpen(!exploreOpen)}
                aria-expanded={exploreOpen}
                aria-haspopup="true"
                aria-label="Open explore menu"
                title="Explore"
              >
                <span className="explore-icon" aria-hidden>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="explore-label">Explore</span>
              </button>
              {exploreOpen && (
                <div className="explore-panel" role="dialog" aria-label="Explore menu">
                  <div className="explore-panel-inner">
                    {exploreSections.map((section) => (
                      <div key={section.title} className="explore-col">
                        <h4 className="explore-col-title">{section.title}</h4>
                        <ul className="explore-links">
                          {section.links.map(({ to, label }) => (
                            <li key={to}>
                              <NavLink to={to} onClick={closeAll}>
                                {label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
