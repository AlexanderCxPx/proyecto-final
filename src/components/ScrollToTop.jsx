import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // puedes cambiar a 'smooth' si prefieres animación
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
