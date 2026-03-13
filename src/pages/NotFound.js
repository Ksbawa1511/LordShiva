import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page not found — Lord Shiva';
  }, []);

  return (
    <div className="not-found">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1>Page not found</h1>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="not-found-cta">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
