import React, { useEffect, useState } from 'react';
import './Loader.css';

const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return <>{children}</>; // Show actual content when loading is false
};

export default LoaderWrapper;
