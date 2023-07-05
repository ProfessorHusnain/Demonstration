import React from 'react'
import { RiHome2Line as Home, RiInformationLine as Info, RiBriefcaseLine as Briefcase, RiMoneyDollarCircleLine as Dollar, RiContactsLine as Contact } from 'react-icons/ri';
import '../styles/SideBar.css';
import { Link } from 'react-scroll';

const SideBar = ({isScrolled,isActive,menuClick}) => {
  
  
    return (
    <div className={`side-bar ${isActive?'active':''} ${isScrolled?'scrolled':''}`}>
    <ul className="side-links">
    <li>
        <Link to='home' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500}  className="side-link" onClick={menuClick}> 
        <div className='side-icon'>
        <Home />
        </div>
        Home</Link>
    </li>
    <li>
        <Link to='about' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="side-link" onClick={menuClick}>
        <div className='side-icon'>
            <Info/>
        </div>
        About</Link>

    </li>
    <li>
        <Link to='services' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="side-link" onClick={menuClick}>
        <div className='side-icon'>
            <Briefcase/>
        </div>
        Services</Link>
    </li>
    <li>
        <Link to='price' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="side-link" onClick={menuClick}>
        <div className='side-icon'>
            <Dollar/>
        </div>
        Price</Link>
    </li>
    <li>
        <Link to='contact' activeClass="active"  spy={true} smooth={true} offset={-85} duration={500} className="side-link" onClick={menuClick}>
        <div className='side-icon'>
            <Contact />
        </div>
        Contact us</Link>
    </li>
    </ul>
</div>
 
  )
}

export default SideBar;
