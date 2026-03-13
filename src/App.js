import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Avatar from './pages/Avatar';
import Jyotirlingas from './pages/Jyotirlingas';
import Kedars from './pages/Kedars';
import Kedarnath from './pages/Kedarnath';
import Tungnath from './pages/Tungnath';
import Rudranath from './pages/Rudranath';
import Madhyamaheshwar from './pages/Madhyamaheshwar';
import Kalpnath from './pages/Kalpnath';
import Amarnath from './pages/Amarnath';
import Family from './pages/Family';
import Temples from './pages/Temples';
import PanchKalash from './pages/PanchKalash';
import Resources from './pages/Resources';
import Mantras from './pages/Mantras';
import Festivals from './pages/Festivals';
import Stories from './pages/Stories';
import NotFound from './pages/NotFound';
import BackToTop from './components/BackToTop';
import './App.css';

const PAGE_TITLES = {
  '/': 'Lord Shiva — Divine Wisdom & Sacred Pilgrimage',
  '/about': 'About Lord Shiva',
  '/family': 'Divine Family of Lord Shiva',
  '/avatar': 'Avatars of Lord Shiva',
  '/jyotirlingas': '12 Jyotirlingas',
  '/kedars': 'Panch Kedars',
  '/amarnath': 'Amarnath Yatra',
  '/mantras': 'Mantras & Chants',
  '/festivals': 'Festivals & Observances',
  '/stories': 'Stories & Legends',
  '/resources': 'Resources & Guides',
  '/temples': 'Sacred Temples',
  '/panchkalash': 'Panch Kailash',
  '/kedarnath': 'Kedarnath',
  '/tungnath': 'Tungnath',
  '/rudranath': 'Rudranath',
  '/madhyamaheshwar': 'Madhyamaheshwar',
  '/kalpnath': 'Kalpeshwar',
};

function AppContent({ theme, onToggleTheme }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = PAGE_TITLES[pathname];
    if (base) document.title = pathname === '/' ? base : base + ' — Lord Shiva';
  }, [pathname]);

  return (
    <>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/jyotirlingas" element={<Jyotirlingas />} />
          <Route path="/kedars" element={<Kedars />} />
          <Route path="/kedarnath" element={<Kedarnath />} />
          <Route path="/tungnath" element={<Tungnath />} />
          <Route path="/rudranath" element={<Rudranath />} />
          <Route path="/madhyamaheshwar" element={<Madhyamaheshwar />} />
          <Route path="/kalpnath" element={<Kalpnath />} />
          <Route path="/amarnath" element={<Amarnath />} />
          <Route path="/family" element={<Family />} />
          <Route path="/mantras" element={<Mantras />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/panchkalash" element={<PanchKalash />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function App() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <div className="App">
        <AppContent theme={theme} onToggleTheme={toggleTheme} />
      </div>
    </Router>
  );
}

export default App;

