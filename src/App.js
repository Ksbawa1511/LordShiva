import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

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
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
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
            <Route path="/temples" element={<Temples />} />
            <Route path="/panchkalash" element={<PanchKalash />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

