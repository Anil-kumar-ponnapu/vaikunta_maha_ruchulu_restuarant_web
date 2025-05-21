

import Navbar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact_Us from './components/Contact-Us';
import WelcomeCard from './components/WelcomeCard';



function App() {
  return (
    <>
     {/* <WelcomeCard/> */}
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact_Us />} />
        </Routes>
      </div>
    </>


  );
}

export default App;
