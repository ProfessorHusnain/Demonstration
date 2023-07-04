import "../styles/Header.css";
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';

function Header({ isActive, menuClick }) {

    {/**
         Handel if screen size change from mobile view to desktop view then close the side 
         side bar if it's active
     */}
     
    useEffect(() => {
        const handleResize = () => {
          if(window.innerWidth>=750){
            
            if(isActive){
                menuClick()
            }
          } 
        };
    
        window.addEventListener('resize', handleResize);
    
        return () =>  window.removeEventListener('resize', handleResize);

      }, [isActive])

    return (
        <header>
            <Link to='home' className="nav-link" smooth={true} offset={-85} duration={500}>
            <div className='logo'>
                <h1>Next<span>X</span>io<span></span></h1>
            </div>
            </Link>
            <div className="mobile">{isActive ? <RiCloseLine onClick={menuClick} /> : <TiThMenu onClick={menuClick} />}</div>
            <NavBar />
        </header>
    );
}


const NavBar = () => {
    return (

        <div className="nav-bar">
            <ul className="nav-links">
                <li>
                    <Link to='home' className="nav-link" activeClass="active" spy={true} smooth={true} offset={-85} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to='about' className="nav-link" activeClass="active"  spy={true} smooth={true} offset={-85} duration={500}>About</Link>

                </li>
                <li>
                    <Link to='services' className="nav-link" activeClass="active" spy={true} smooth={true} offset={-85} duration={500}>Services</Link>

                </li>
                <li>
                    <Link to='price' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="nav-link">Price</Link>

                </li>
                <li>
                    <Link to='contact' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="nav-link">Contact us</Link>

                </li>
            </ul>
        </div>

    );
}

export default Header;