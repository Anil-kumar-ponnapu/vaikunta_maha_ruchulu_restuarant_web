import React, { useEffect, useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const slides = [
        {
            image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
            text: 'Welcome to our restaurant! Welcome to our restaurant! Welcome to our restaurant!',
        },
        {
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
            text: 'Welcome to our restaurant! Welcome to our restaurant! Welcome to our restaurant!',
        },
          {
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
            text: 'Welcome to our restaurant! Welcome to our restaurant! Welcome to our restaurant!',
        },

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
                <div className='text-stars'>
                    <p className="carousel-text">{slides[index].text}</p>
                    <div className="carousel-rating">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">
                                ★
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            <button className="carousel-button desktop-only" onClick={nextSlide}>
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                </svg>
            </button>

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



    );
};

export default Carousel;