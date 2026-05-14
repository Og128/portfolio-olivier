import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Remonter la page à chaque changement de route
    window.scrollTo(0, 0);
  }, [location]); // Ce hook s'exécute à chaque changement de `location`

  return null; // Ce composant n'a pas besoin de rendre quoi que ce soit
};

export default ScrollToTop;
