import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/NavBar';
import Footer from './components/FooterComponent';
import ScrollToTopButton from './components/ScrollButton';
import Loader from './comman/Loader';

// Eagerly load Home
import Home from './pages/Home';

// Lazy load other pages
const About = lazy(() => import('./pages/About'));
const Contact_Us = lazy(() => import('./pages/Contact-Us'));
const Catering = lazy(() => import('./pages/Catering'));
const MediaGallery = lazy(() => import('./pages/Gallary'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  useEffect(() => {
    if (!window.fbq) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', '1157312469566154');
      window.fbq('track', 'PageView');
    }
  }, []);


return loader ? (
  <Loader />
) : (
  <>
    <Navbar />
    <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact_Us />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/gallery" element={<MediaGallery />} />
      </Routes>
  
    <Footer />
    <ScrollToTopButton />
  </>
);

}

export default App;
