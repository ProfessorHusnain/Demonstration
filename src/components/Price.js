import React from 'react'
import '../styles/Price.css'
import { BsCheck2Circle } from "react-icons/bs";

const data = [
  {
    title: "starter",
    price: '25',
    image: './images/starter.svg',
    offers: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ]
  }
  ,
  {
    title: "Business",
    price: '100',
    image: './images/business.svg',
    offers: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5'
    ]
  }
  ,
  {
    title: "Professional",
    price: '50',
    image: './images/professional.svg',
    offers: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4'
    ]
  }
]

const Price = () => {
  return (
    <div id='price' className='price-container'>
      <h1>Price Plan<span className='heading-line'></span></h1>
      <div className='price'>
        {data.map((d) =>
          <>
            <div className='card'>
              <img src={d.image} alt={d.title} />
              <div className='price-details'>
                <span>&#36;</span>
                <span>{d.price}</span>
                <span>/month</span>
              </div>
              <h1>{d.title}</h1>
              {d.offers.map((o) =>
                <div className='offers'>
                  <div>
                     <span className='icon'>
                      <BsCheck2Circle />
                      </span>
                      <span>{o}</span>  
                  </div>
                </div>
              )}
              <div className='action'><button>Get Now</button></div>
               
            </div>
          </>
        )}
      </div>

    </div>
  )
}

export default Price
