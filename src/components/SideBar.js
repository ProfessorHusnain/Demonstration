import React from 'react'
import { RiHome2Line as Home, RiInformationLine as Info, RiBriefcaseLine as Briefcase, RiMoneyDollarCircleLine as Dollar, RiContactsLine as Contact } from 'react-icons/ri';
import '../styles/SideBar.css';
import { NavLink } from 'react-router-dom';

const SideBar = ({isActive}) => {
  return (
    <div className={`side-bar ${isActive?'active':''}`}>
    <ul className="side-links">
    <li>
        <NavLink to='/' className="side-link"> 
        <div className='side-icon'>
        <Home />
        </div>
        Home</NavLink>
    </li>
    <li>
        <NavLink to='/about' className="side-link">
        <div className='side-icon'>
            <Info/>
        </div>
        About</NavLink>

    </li>
    <li>
        <NavLink to='/services' className="side-link">
        <div className='side-icon'>
            <Briefcase/>
        </div>
        Services</NavLink>
    </li>
    <li>
        <NavLink to='/price' className="side-link">
        <div className='side-icon'>
            <Dollar/>
        </div>
        Price</NavLink>
    </li>
    <li>
        <NavLink to='/contact' className="side-link">
        <div className='side-icon'>
            <Contact />
        </div>
        Contact us</NavLink>
    </li>
    </ul>
</div>
  )
}

export default SideBar;
