import React, { lazy } from 'react';
import "./home.css";

import Maincard from '../../comman/maincard';
import CommonButton from '../../comman/Button';
import SEO from '../../comman/SEO';
import OptimizedImage from '../../comman/imageOptimise';
// CarouselComponent = lazy(() => import("../../components/Carousel"));
import Specialities from "../../components/Specialities";
import CarouselComponent from "../../components/Carousel";


const Home = () => {
  const getPhoneCallHandelr = () => {
    const phoneNumber = "7900368003";
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <SEO
        title="Vaikunta Maha Ruchulu - Pure Veg Andhra Restaurant in Vizag"
        description="Vaikunta Maha Ruchulu in Vizag offers authentic & original pure veg dishes. Indulge in South Indian Thali, delightful Breakfast, Tandoori, & Chinese cuisines. Visit us in Seethammadhara for a soul-nourishing experience!"
        keywords="
        Vaikunta Maha Ruchulu,
        Traditional Andhra thali in Visakhapatnam,
        Andhra veg meals Vizag,
        Andhra vegetarian restaurant near me,
        authentic Indian vegetarian Vizag,
        Authentic Telugu meals Vizag,
        best biryani in vizag,
        best breakfast Vizag,
        best dine-in in vizag,
        Best gongura pappu in Vizag,
        Best pure veg restaurant in Vizag,
        best tiffins in vizag,
        best veg food Vizag,
        best veg restaurant vizag,
        Best vegetarian restaurant Vizag,
        Biryani,
        brahmins food restaurant Vizag,
        Budget veg meals near me,
        Budget veg restaurant Vizag,
        Dosa lover"
        url="https://vaikuntamaharuchulu.com/"

      />



      <main>
        <Maincard
          image={"assets/gallery/home_image.JPG"}
          title={"PURITY IN EVERY GRAIN"}
        />
        <div>
          <Specialities />
        </div>

        <div>
          <div>
            <Maincard
              image={"assets/dine_in_images/dain_in_background_img.jpg"}
              title={"BOOK A TABLE FOR DINE-IN"}
              textClass="top-left"
              middleContent={
                <>
                  <div className="dine-section">
                    <div className="mobile-only">
                      <div className="mobile-section__image-block">
                        <div className="mobile-image-pair">
                          <OptimizedImage
                            className="mobile-dine-section__image--circle"
                            src="assets/dine_in_images/dine_in1.jpg"
                            webpSrc="assets/dine_in_images/dine_in1.webp"
                            avifSrc="assets/dine_in_images/dine_in1.avif"
                            placeholder="assets/dine_in_images/dine_in1-blur.jpg"
                            alt="Dish 1"
                            loading="lazy"
                          />
                          <OptimizedImage
                            className="mobile-dine-section__image--square"
                            src="assets/dine_in_images/dine_in3.jpg"
                            webpSrc="assets/dine_in_images/dine_in3.webp"
                            avifSrc="assets/dine_in_images/dine_in3.avif"
                            placeholder="assets/dine_in_images/dine_in3-blur.jpg"
                            alt="Dish 2"
                            loading="lazy"
                          />
                        </div>
                        <div className="mobile-image-pair">
                          <OptimizedImage
                            className="mobile-dine-section__image--square"
                            src="assets/dine_in_images/dine_in4.jpg"
                            webpSrc="assets/dine_in_images/dine_in4.webp"
                            avifSrc="assets/dine_in_images/dine_in4.avif"
                            placeholder="assets/dine_in_images/dine_in4-blur.jpg"
                            alt="Dish 3"
                            loading="lazy"
                          />
                          <OptimizedImage
                            className="mobile-dine-section__image--circle"
                            src="assets/dine_in_images/dine_in2.jpg"
                            webpSrc="assets/dine_in_images/dine_in2.webp"
                            avifSrc="assets/dine_in_images/dine_in2.avif"
                            placeholder="assets/dine_in_images/dine_in2-blur.jpg"
                            alt="Dish 4"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="desktop-only dine-section__image-wrapper">
                      <div className="dine-section__image-block">
                        <OptimizedImage
                          className="dine-section__image1"
                          src="assets/dine_in_images/dine_in1.jpg"
                          webpSrc="assets/dine_in_images/dine_in1.webp"
                          avifSrc="assets/dine_in_images/dine_in1.avif"
                          placeholder="assets/dine_in_images/dine_in1-blur.jpg"
                          alt="Dish 1"
                          loading="lazy"
                        />
                      </div>

                      <div className="dine-section__middle-images">
                        <div className="dine-section__image-block">
                          <OptimizedImage
                            className="dine-section__image"
                            src="assets/dine_in_images/dine_in4.jpg"
                            webpSrc="assets/dine_in_images/dine_in4.webp"
                            avifSrc="assets/dine_in_images/dine_in4.avif"
                            placeholder="assets/dine_in_images/dine_in4-blur.jpg"
                            alt="Dish 2"
                            loading="lazy"
                          />
                        </div>
                        <div className="dine-section__image-block">
                          <OptimizedImage
                            className="dine-section__image"
                            src="assets/dine_in_images/dine_in3.jpg"
                            webpSrc="assets/dine_in_images/dine_in3.webp"
                            avifSrc="assets/dine_in_images/dine_in3.avif"
                            placeholder="assets/dine_in_images/dine_in3-blur.jpg"
                            alt="Dish 3"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="dine-section__image-block">
                        <OptimizedImage
                          className="dine-section__image1"
                          src="assets/dine_in_images/dine_in2.jpg"
                          webpSrc="assets/dine_in_images/dine_in2.webp"
                          avifSrc="assets/dine_in_images/dine_in2.avif"
                          placeholder="assets/dine_in_images/dine_in2-blur.jpg"
                          alt="Dish 4"
                          loading="lazy"
                        />
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
          <div className='info-container'>
            <img src="assets/images/informationCard.jpg" style={{ width: "100%", height: "100%" }} alt="Background" />
            <div className='info-textcontent'>
              <p className='review-heading'>TESTIMONIALS</p>
              <CarouselComponent />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
