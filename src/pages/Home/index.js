import React from 'react';
import "./home.css"
// import Carousel from '../../components/Carousel';
import Maincard from '../../comman/maincard';
import CommonButton from '../../comman/Button';
import Specialities from '../../components/Specialities';

const Home = () => {

  const getPhoneCallHandelr = () => {
    const phoneNumber = "7900368003";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>

      <Maincard
        image={"images/home_image.jpeg"}
        title={"PURITY IN EVERY GRAIN"}
      />
      <div>
        <Specialities />
      </div>

      <div>
        <div>
          <Maincard
            image={"images/dine_in_images/dain_in_background_img.jpg"}
            title={"BOOK A TABLE FOR DINE-IN"}
            textClass="top-left"
            middleContent={
              <>
                <div className="dine-section">
                  <div className="mobile-only">
                    <div className="mobile-section__image-block">
                      <div className="mobile-image-pair">
                        <img className="mobile-dine-section__image--circle" src="images/dine_in_images/dain_in_table_image3.jpg" alt="Dish 1" />
                        <img className="mobile-dine-section__image--square" src="images/dine_in_images/dine_in_table_image4.jpg" alt="Dish 2" />
                      </div>
                      <div className="mobile-image-pair">
                        <img className="mobile-dine-section__image--square" src="images/dine_in_images/dine_in_table_image4.jpg" alt="Dish 3" />
                        <img className="mobile-dine-section__image--circle" src="images/dine_in_images/dain_in_table_image3.jpg" alt="Dish 4" />
                      </div>
                    </div>
                  </div>




                  <div className="desktop-only dine-section__image-wrapper">
                    <div className="dine-section__image-block">
                      <img className="dine-section__image1" src="images/dine_in_images/dain_in_table_image3.jpg" alt="Dish 1" />
                    </div>

                    <div className="dine-section__middle-images">
                      <div className="dine-section__image-block">
                        <img className="dine-section__image" src="images/dine_in_images/dine_in_table_image4.jpg" alt="Dish 2" />
                      </div>
                      <div className="dine-section__image-block">
                        <img className="dine-section__image" src="images/dine_in_images/dain_in_table_image3.jpg" alt="Dish 3" />
                      </div>
                    </div>

                    <div className="dine-section__image-block">
                      <img className="dine-section__image1" src="images/dine_in_images/dine_in_table_image4.jpg" alt="Dish 4" />
                    </div>
                  </div>
                </div>



              </>






            }

          >

            <CommonButton
              title={"Call Now"}
              onClick={getPhoneCallHandelr}
            />


          </Maincard>
        </div>

        {/* <div className='info-container'>
          <img src="images/informationCard.jpg" style={{ width: "100%", height: "100%" }} alt="Background" />

          <div className='info-textcontent'>
            <p className='review-heading'>TESTIMONIALS</p>
         
              <Carousel />
            
          </div>

        </div> */}
      </div>

    </>
  );
};

export default Home;
