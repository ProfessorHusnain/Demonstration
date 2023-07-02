import "../styles/Header.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header(){

    return (
        <header>
         <div className='logo'>
          <h1>Next<span>X</span>io<span></span></h1>
         </div>
         <div className="nav-bar">
               <ul className="nav-links">
                <li>
                    <Link to='/'  className="nav-link">Home</Link>
                </li>
                <li>
                <Link to='/about' className="nav-link">About</Link>
                    
                </li>
                <li>
                <Link to='/services' className="nav-link">Services</Link>
                    
                </li>
                <li>
                <Link to='/price' className="nav-link">Price</Link>
                    
                </li>
                <li>
                    <Link to='/contact' className="nav-link">Contact us</Link>
                    
                </li>
               </ul>
         </div>
        
         
        </header>  
    );
}
export default Header;