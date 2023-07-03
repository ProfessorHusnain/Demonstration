import "../styles/Header.css";
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RiCloseLine } from 'react-icons/ri';

function Header({isActive,menuClick}) {

    return (
        <header>
            <div className='logo'>
                <h1>Next<span>X</span>io<span></span></h1>
            </div>
            <div className="mobile">{isActive?<RiCloseLine onClick={menuClick}/>:<TiThMenu onClick={menuClick} />}</div>
            <NavBar />
        </header>
    );
}


const NavBar = () => {
    return (

        <div className="nav-bar">
            <ul className="nav-links">
                <li>
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className="nav-link">About</NavLink>

                </li>
                <li>
                    <NavLink to='/services' className="nav-link">Services</NavLink>

                </li>
                <li>
                    <NavLink to='/price' className="nav-link">Price</NavLink>

                </li>
                <li>
                    <NavLink to='/contact' className="nav-link">Contact us</NavLink>

                </li>
            </ul>
        </div>

    );
}

export default Header;