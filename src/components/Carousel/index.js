import React, { useEffect, useRef, useState } from 'react';
import './carousel.css';

const CarouselComponent = () => {
    const slides = [
        {
            name: "Jyothsna",
            image: 'assets/images/testmonials/Veg_Thali.webp',
            text: 'Had a lovely family outing—great ambience and delicious South & North Indian dishes. Must-try: Japan noodles soup, Topi dosa, chilli gobi, black bean paneer & butter naan. Kids loved it too',
        },

        {
            name: "Madhavi",
            image: 'assets/images/testmonials/Paneer_Butter_Masala.svg',
            text: 'The Paneer Butter Masala at Vaikunta Maha Ruchulu is a rich, creamy delight! Tender paneer cubes bathed in a buttery tomato gravy smooth, mildly spiced, and deeply comforting.',
        },
        {
            name: "Nishanth Reddy Dumpala",
            image: 'assets/images/testmonials/idly.svg',
            text: "A paradise for vegetarians who enjoy bold, regional Indian cuisine. Affordable, flavorful, and deeply satisfying a must-visit for lovers of South Indian food.",
        },
        {
            name: "Sai Kovvuri",
            image: 'assets/images/testmonials/Sambar_Rice.svg',
            text: "Restaurant looks very good with clean and hygenic conditions around and felt good was amazing....Food to look at- sambar rice was excellent.  ",
        },




    ];

    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);

    const startAutoSlide = () => {
        stopAutoSlide(); // Clear any previous interval
        intervalRef.current = setInterval(() => {
            setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 7000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // cleanup
    }, []);

    return (
        <div
            className="carousel-container"
        // onMouseEnter={stopAutoSlide}
        // onMouseLeave={startAutoSlide}
        >
            <button className="carousel-button desktop-only" onClick={() => setIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1))}>
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                </svg>
            </button>

            <div className="carousel-content">
                <div className="carousel-image">
                    <img src={slides[index].image} alt="Slide" loading='lazy' className="carousel-img" />
                </div>

                <div className='review_container carousel-slide fade-slide'>
                    <div className='carousel-text'>
                        {slides[index].text}
                        <div>
                            <h1>{slides[index].name}</h1>
                            <div>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">★</span>
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

            <button className="carousel-button desktop-only" onClick={() => setIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1))}>
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default CarouselComponent;
