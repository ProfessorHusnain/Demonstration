import React, { useEffect, useState } from 'react'
import '../styles/HeroSection.css'

const bannerImages = [
  './images/i-6.png',
  './images/i-7.webp',
  './images/i-8.png',
    './images/i-1.svg',
    './images/i-2.svg',
    './images/i-3.svg',
    './images/i-4.svg',
    './images/i-5.svg',
    './images/i1.jpg',
    './logo192.png'
  ];
const HeroSection = () => {

    const[index,setIndex]=useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setIndex((p)=>
                p===bannerImages.length-1?0:p+1
            );
        },5000)
        return  () =>clearInterval(interval);
    },[]);

    const style={
        position: 'relative',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bannerImages[2]})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
  return (
    <div className='hero-section'>
      <div className='image-container'>
       <div style={style}></div>
      </div>
      <div className='controls'>
       <h1>1</h1>
      </div>
    </div>
  )
}

export default HeroSection;
