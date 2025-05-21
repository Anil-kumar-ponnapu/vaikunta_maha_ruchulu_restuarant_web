import React from 'react';
import "./home.css"
import Footer from '../footer';


const Home = () => {
  return (
    <>

      <div className="card-container">
        <img src="images/cards_image.jpg" className="card-image" alt="Card" />
        <div className="card-text" style={{ direction: "rtl", textAlign: "right" }}>A TASTE OF AUTHENTICITY</div>
      </div>
      <div className='info-container'>
        <img src="images/navbar_bg.jpg" style={{ width: "100%", height: "600px" }} alt="Background" />

        <div className='info-textcontent'>
         
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
