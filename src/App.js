import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact_Us from './components/Contact-Us';

import ScrollToTopButton from './components/ScrollButton'; // Custom button
import { useEffect, useState } from 'react';
import Loader from './comman/Loader';

import Catering from './components/Catering';
import Footer from './components/FooterComponent';




function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []); // Add empty dependency array to run only once on mount

  if (loader) {
    return (

      <Loader />
    );
  }

  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact_Us />} />
          <Route path='/catering' element={<Catering />} />
        </Routes>
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
