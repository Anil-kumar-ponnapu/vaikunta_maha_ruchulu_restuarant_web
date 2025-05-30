import React from 'react';
import "./home.css"
import Carousel from '../Carousel';
import Maincard from '../../comman/maincard';
import CommonButton from '../../comman/Button';
import Specialities from '../Specialities';

const Home = () => {

  const getPhoneCallHandelr = () => {
    const phoneNumber = "7900368003";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>

      <Maincard
        image={"images/noppon-meenuch-MPLIm0LynRQ-unsplash.jpg"}
        title={"PURITY IN EVERY GRAIN"}
      />
      <div>
        <Specialities />
      </div>

      <div>
        <Maincard
          image={"images/Konark sun temple.jpg"}
          title={"BOOK A TABLE FOR DINE-IN"}
          textClass="top-left"
        >
          <CommonButton
            title={"Call Now"}
            onClick={getPhoneCallHandelr}
          />

        </Maincard>
        <div className='info-container'>
          <img src="images/informationCard.jpg" style={{ width: "100%", height: "600px" }} alt="Background" />

          <div className='info-textcontent'>
            <p className='review-heading'>TESTIMONIALS</p>
            <div className=''>
              <Carousel />
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Home;
