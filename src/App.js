import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';

import Contact_Us from './pages/Contact-Us';

import ScrollToTopButton from './components/ScrollButton';
import { useEffect, useState } from 'react';
import Loader from './comman/Loader';

import Catering from './pages/Catering';
import Footer from './components/FooterComponent';
import About from './pages/About';





const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top with no animation or loading
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

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact_Us />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
