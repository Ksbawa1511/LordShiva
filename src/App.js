import React from 'react';
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
import Temples from './pages/Temples';
import PanchKalash from './pages/PanchKalash';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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

