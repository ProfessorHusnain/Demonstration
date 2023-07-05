import React, { useState, useEffect } from 'react';
import '../styles/Banner.css'

const Banner = ({style}) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [
    './images/i-6.png',
    './images/i-7.webp',
    './images/i-8.png',
    './images/i-1.svg',
    './images/i-2.svg',
    './images/i-3.svg',
    './images/i-4.svg',
    './images/i-5.svg',
  ];

  // Function to automatically change the banner every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to manually change the banner
  const changeBanner = (index) => {
    setCurrentBannerIndex(index);
  };

  return (
    <div className="banner" id='home'>
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index}`}
          className={currentBannerIndex === index ? 'active' : ''}
        />
      ))}
      <div className="banner-controls">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            onClick={() => changeBanner(index)}
            className={`slider ${currentBannerIndex === index ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
