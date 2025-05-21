import React, { useState, useEffect } from 'react';

const WelcomeCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const hasSeenCard = localStorage.getItem('hasSeenWelcome');
  //   if (!hasSeenCard) {
  //     setIsVisible(true);
  //   }
  // }, []);

  // const handleClose = () => {
  //   setIsVisible(false);
  //   localStorage.setItem('hasSeenWelcome', 'true');
  // };

  // if (!isVisible) return null;

  return (
    <div class="card">
      <h2>Welcome to DreamCasa!</h2>
      <p>The Only Platform You Need for Your Dream Home</p>
      <img src="logo.png" alt="DreamCasa Logo" class="logo" />
      <p>Explore our exclusive property listings, best offers, and home solutions!</p>
      <div class="buttons">
        <button class="btn learn-more">Learn More</button>
        <button class="btn continue">Continue</button>
      </div>
    </div>

  );
};

export default WelcomeCard;
