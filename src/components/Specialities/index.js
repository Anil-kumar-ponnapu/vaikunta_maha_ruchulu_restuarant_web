import React from "react";
import "./Specialities.css";

const Specialities = () => {
  return (
    <>


      <section
        className="specialities"
        style={{ backgroundImage: "url('/images/informationCard.jpg')" }}
      >
        <div className="specialities-overlay">
          <p className="special-heading">OUR SPECIALITIES</p>
          <p className="description">
            At <spam style={{ fontWeight: '700'}}>Vaikunta Maha Ruchulu</spam>, we take pride in serving soul-satisfying vegetarian dishes that blend tradition, taste, and health. Crafted with farm-fresh ingredients, time-honored recipes, and lots of love, here are our signature offerings that keep our guests coming back for more
          </p>

          <div className="specials-grid">

            <div className="card">
              <img src="images\specialitiesImages\brinjal_image.svg" alt="Veg Pulao" />
              <div className="overlay">
                <h3>Gutti Vankaya</h3>
                <p>
                  A fragrant rice dish cooked with aromatic spices and mixed vegetables. It's a healthy and
                  satisfying treat for all food lovers.
                </p>
              </div>
            </div>

            {/* RR Veg Thali */}
            <div className="card">
              <div>
                <img src="images\specialitiesImages\pasarattu_upma_image.svg" alt="RR Veg Thali" />
              </div>

              <div className="overlay">
                <h3>Pesarattu - upma</h3>
                <p>
                  A wholesome and flavorful delight, this crispy moong dal crepe is perfectly pan-cooked and stuffed with warm, savory upma made from semolina and aromatic spices—bringing comfort
                </p>
              </div>
            </div>

            {/* Gutti Vankaya Pulusu */}
            <div className="card">
              <img src="images\specialitiesImages\veg_thali_image.svg" alt="Gutti Vankaya Pulusu" />
              <div className="overlay">
                <h3>Veg - Thali</h3>
                <p>
                  Tender brinjals (eggplants) stuffed and simmered in a tangy tamarind-based gravy—a signature
                  Andhra dish loved by many.
                </p>
              </div>
            </div>
            <div className="card">
              <img src="images\specialitiesImages\veg_bhiriyani_image.svg" alt="Gutti Vankaya Pulusu" />
              <div className="overlay">
                <h3>Veg - Biriyani</h3>
                <p>
                  Tender brinjals (eggplants) stuffed and simmered in a tangy tamarind-based gravy—a signature
                  Andhra dish loved by many.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Specialities;
