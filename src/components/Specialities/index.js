import React, { useEffect, useState } from "react";
import "./Specialities.css";
const specialsData = [
  {
    image: "images/specialitiesImages/pasarattu_upma_image.svg",
    alt: "RR Veg Thali",
    title: "Pesarattu - upma",
    description: "Crispy green moong dal dosa (Pesarattu) paired with savory semolina upma—a wholesome, protein-rich South Indian breakfast duo"
  },
  {
    image: "images/specialitiesImages/veg_thali_image.svg",
    alt: "Gutti Vankaya Pulusu",
    title: "Veg - Thali",
    description: "Delicious Veg Thali – A Wholesome Feast of Flavors. Savor a balanced meal with fresh curries, dal, rice, roti, and desserts. Pure vegetarian delight"
  },
  {
    image: "images/specialitiesImages/veg_bhiriyani_image.svg",
    alt: "Veg Biryani",
    title: "Veg - Biriyani",
    description: "Savor the rich flavors of Veg Biryani – fragrant basmati rice, fresh veggies, and aromatic spices cooked to perfection. A delicious, wholesome feast for every occasion"
  },
  {
    image: "images/specialitiesImages/brinjal_image.svg",
    alt: "Veg Pulao",
    title: "Gutti Vankaya",
    description: "Savory Andhra-style Gutti Vankaya – tender brinjals stuffed with aromatic spices & slow-cooked to perfection. A rich, flavorful curry that pairs best with steamed rice or roti"
  }, {
    image: "images/specialitiesImages/paneer_thikka.svg",
    title: "Paneer Tikka",
    description: "Smoky tandoori paneer—marinated in creamy yogurt and bold spices, served with mint chutney & tangy onions"
  },
  {
    image: "images/specialitiesImages/kadai_paneer_Naan.svg",
    title: "Kadai Paneer Naan",
    description: "Cottage cheese cubes cooked in spicy onion-tomato gravy with bell peppers and house-ground kadai masala. Served with soft, buttered naan for the perfect North Indian indulgence."
  },
  {
    image: "images/specialitiesImages/manchauria.svg",
    title: "Veg Manchurian",
    description: "Crispy vegetable dumplings stir-fried in a bold garlic-soy-chili sauce. A perfect Indo-Chinese fusion appetizer!"
  },
  {
    image: "images/specialitiesImages/fried_rice.svg",
    title: "Fried Rice",
    description: "Steamed rice tossed with colorful vegetables, soy sauce, and a dash of seasoning — cooked on high flame for authentic street-style flavor."
  }
];

const Specialities = () => {

  const itemsPerSlide = 3;

  const totalSlides = Math.ceil(specialsData.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically go to the next slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // 10000 ms = 10 seconds

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Calculate visible items
  const visibleItems = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    const index = (currentSlide * itemsPerSlide + i) % specialsData.length;
    visibleItems.push(specialsData[index]);
  }

  // Navigation handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


  return (
    <>


      <section
        className="vmr-special-section"
        style={{ backgroundImage: "url('/images/informationCard.jpg')" }}
      >
        <div className="vmr-overlay">
          <div>
            <p className="vmr-heading">OUR SPECIALITIES</p>
            <p className="vmr-description">
              At <span style={{ fontWeight: '700' }}>Vaikunta Maha Ruchulu</span>, we take pride in serving soul-satisfying vegetarian dishes that blend tradition, taste, and health. Crafted with farm-fresh ingredients, time-honored recipes, and lots of love, here are our signature offerings that keep our guests coming back for more
            </p>
          </div>

          <div className="vmr-carousel-container">
            <button onClick={prevSlide} className="vmr-carousel-button">
              <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
              </svg>
            </button>

            <div className="vmr-carousel-content">
              {visibleItems.map((item, index) => (
                <div className="vmr-carousel-card" key={index}>
                  <img src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <button onClick={nextSlide} className="vmr-carousel-button">
              <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Specialities;
