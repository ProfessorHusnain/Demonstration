import React, { useState, useEffect } from 'react';
import '../styles/Banner.css'

const Banner = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const bannerImages = [
    '/images/i1.jpg',
    '/images/i2.jpg',
    '/images/i3.jpg',
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
    <div className="banner">
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
          <button
            key={index}
            onClick={() => changeBanner(index)}
            className={currentBannerIndex === index ? 'active' : ''}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
