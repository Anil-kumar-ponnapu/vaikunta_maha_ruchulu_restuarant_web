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
            At <spam style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu</spam>, we take pride in serving soul-satisfying vegetarian dishes that blend tradition, taste, and health. Crafted with farm-fresh ingredients, time-honored recipes, and lots of love, here are our signature offerings that keep our guests coming back for more
          </p>

          <div className="specials-grid">



            {/* RR Veg Thali */}
            <div className="card">
              <div>
                <img src="images\specialitiesImages\pasarattu_upma_image.svg" alt="RR Veg Thali" />
              </div>

              <div className="overlay">
                <h3>Pesarattu - upma</h3>
                <p>
                  Crispy green moong dal dosa (Pesarattu) paired with savory semolina upma—a wholesome, protein-rich South Indian breakfast duo
                </p>
              </div>
            </div>

            {/* Gutti Vankaya Pulusu */}
            <div className="card">
              <img src="images\specialitiesImages\veg_thali_image.svg" alt="Gutti Vankaya Pulusu" />
              <div className="overlay">
                <h3>Veg - Thali</h3>
                <p>
                  Delicious Veg Thali – A Wholesome Feast of Flavors
                  Savor a balanced meal with fresh curries, dal, rice, roti, and desserts. Pure vegetarian delight
                </p>
              </div>
            </div>
            <div className="card">
              <img src="images\specialitiesImages\veg_bhiriyani_image.svg" alt="Gutti Vankaya Pulusu" />
              <div className="overlay">
                <h3>Veg - Biriyani</h3>
                <p>
                  Savor the rich flavors of Veg Biryani – fragrant basmati rice, fresh veggies, and aromatic spices cooked to perfection. A delicious, wholesome feast for every occasion
                </p>
              </div>
            </div>
            <div className="card">
              <img src="images\specialitiesImages\brinjal_image.svg" alt="Veg Pulao" />
              <div className="overlay">
                <h3>Gutti Vankaya</h3>
                <p>
                  Savory Andhra-style Gutti Vankaya – tender brinjals stuffed with aromatic spices & slow-cooked to perfection. A rich, flavorful curry that pairs best with steamed rice or roti
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
