import React from 'react'
import '../styles/Services.css'
import '../styles/About.css'
const data=[
    {title:'Company',
    discription:'Our company is not profitable for who has not capcity for digitalize there business in due to high expenses.',
    picture:'./images/i-5.svg'
   }
]

const Services = () => {
  return (
    <div id='services' className='services-container'>
    <h1>Services<span className='heading-line'></span></h1>
    <div className='services'>
        {data.map((d)=>
            <>
           <div className='picture-container'>
             <div className='picture'>
             <img src={d.picture} alt={d.title}/>
             </div>
           </div>
           <div className='content-container'>
             <div className='content'>
             <h1>{d.title}</h1>
             <p>{d.discription}</p>
             </div>
           </div>
           </>
        )}
      
    </div>
    </div>

  )
}
 
export default Services
