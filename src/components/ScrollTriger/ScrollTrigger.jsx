import { createContext, useEffect, useState, useContext } from 'react';

const ScrollContext = createContext(false);

export const ScrollProvider = ({ children }) => {
  const [showOnScroll, setShowOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowOnScroll(window.scrollY > 300); // Scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={showOnScroll}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollTrigger = () => useContext(ScrollContext);
