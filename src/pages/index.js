import React, { useState, useEffect } from 'react'
import Header from '../components/Header';

import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
import About from '../components/About';
import Services from '../components/Services';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { FaArrowUp as UpIcon } from 'react-icons/fa';
import { Link } from 'react-scroll';
const Home = () => {

  const [isSideBarActive, setIsSideBarActive] = useState(false);

  const [screenSize, setScreenSize] = useState(window.innerHeight);

  const [isScrolled, setIsScrolled] = useState(false)

  /*
   ## - Handel toggel of side bar 
  */

  const toggleSideBar = () => {
    setIsSideBarActive(!isSideBarActive);
  }

  /*
  * Detect Scroll
  */

  const detectScroll = () => {
    (window.scrollY >= 500) ? setIsScrolled(true) : setIsScrolled(false)
  }

  /**
     ##  Handel if screen size change from mobile view to desktop view then close the side 
     ##  side bar if it's active
  **/

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 750) {
        if (isSideBarActive) {
          toggleSideBar()
        }
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', detectScroll);
    }

  }, [isSideBarActive])

  /*
  style for header and side bar for mainting there postion on screen
  */

  const style = {
    position: 'sticky',
    top: '0',
    zIndex: '1000'
  }

  /*
  * Handeling screen height for every component
  */

  /*useEffect(()=>{
    const heightHandler= ()=>{
      setScreenSize(window.innerHeight)
    }
    window.addEventListener('resize',heightHandler)
    return ()=>window.removeEventListener('resize',heightHandler)
  },[])

  const componentHeight = {
    height: screenSize + 'px',
  };*/


  return (
    <>
        <div style={style}>
          <Header isScrolled={isScrolled} isActive={isSideBarActive} menuClick={toggleSideBar} />
          <SideBar isScrolled={isScrolled} isActive={isSideBarActive} menuClick={toggleSideBar} />
        </div>
        <div className={`ScrollUp ${isScrolled?'active':''}`}>
          <Link to='home' smooth={true} offset={-85} duration={900}><UpIcon /></Link>
        </div>

        <Banner />
        <About />
        <Services />
        <Price />
        <Contact />
        <Footer />
        {/*<Routes>
        
      <Route path='/' Component={Banner}></Route>
       <Route path='about' Component={About}></Route>
  </Routes>*/}
    </>
  )
}

export default Home;
