import React, { useEffect, useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const slides = [
        {
            name: "Anil",
            image: 'images/testmonials/Veg_Thali.svg',
            text: 'Loved the Special Veg Thali at Vaikunta Maha Ruchulu! Every dish was flavorful, perfectly spiced, and served with warmth just like a festive meal at home. Clean, satisfying, and a must-try! Will be back  ',
        },

        {
            name: "Madhavi",
            image: 'images/testmonials/Paneer_Butter_Masala.svg',
            text: 'The Paneer Butter Masala at Vaikunta Maha Ruchulu is a rich, creamy delight! Tender paneer cubes bathed in a buttery tomato gravy smooth, mildly spiced, and deeply comforting.',
        },
        {
            name: "Tirupathi Reddy",
            image: 'images/testmonials/idly.svg',
            text: "Soft, fluffy, and steaming hot—the idlis at Vaikunta Maha Ruchulu are pure perfection! Paired with rich sambar and velvety coconut chutney, it's a wholesome, homely delight. Light, nourishing, and a must-visit for South Indian food lovers!",
        },
        {
            name: "Jagadeesh",
            image: 'images/testmonials/Sambar_Rice.svg',
            text: "Sambar Rice at Vaikunta Maha Ruchulu is the ultimate comfort food perfectly cooked rice infused with fragrant, tangy sambar, balanced with the right spices and veggies. Served piping hot with crispy papad and pickle, it’s simple, soulful, and deeply satisfying! Jagadesh",
        },

        {
            name: "Mathura mahalingam",
            image: 'images/testmonials/pulihora.svg',
            text: "Pulihora at Vaikunta Maha Ruchulu is a nostalgic delight! With its perfect balance of tangy tamarind and bold spices, every bite bursts with authentic South Indian flavor. Simple, soulful, and a must-try for lovers of classic Andhra cuisine",
        }


    ];

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        // Clear the interval on unmount
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel-container">
            <button className="carousel-button desktop-only" onClick={prevSlide}>
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>
            </button>

            <div className="carousel-content">

                <div className="carousel-image">


                    <img src={slides[index].image} alt="Slide" className="carousel-img" />
                </div>
                <div className='review_container carousel-slide fade-slide ' >
                    <div className='carousel-text'>
                        {slides[index].text}
                        <div>
                            <h1>
                                {slides[index].name}
                            </h1>

                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="carousel-mobile-dots">
                        {slides.map((_, i) => (
                            <span
                                key={i}
                                className={`carousel-dot ${i === index ? 'active' : ''}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>



                </div>

            </div>

            <button className="carousel-button desktop-only" onClick={nextSlide}>
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
            </button>


        </div>



    );
};

export default Carousel;