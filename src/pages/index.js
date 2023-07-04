import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from '../components/Banner';
import SideBar from '../components/SideBar';
import About from '../components/About';
import Services from '../components/Services';
import Price from '../components/Price';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  /*
   ## - Handel toggel of side bar 
  */

  const toggleSideBar = () => {
    setIsSideBarActive(!isSideBarActive);
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
    return () => window.removeEventListener('resize', handleResize);

  }, [isSideBarActive])

  /*
  style for header and side bar for mainting there postion on screen
  */

  const style = {
    position: 'sticky',
    top: '0',
    zIndex: '1000'
  }


  return (
    <>
      <Router>
        <div style={style}>
          <Header isActive={isSideBarActive} menuClick={toggleSideBar} />
          <SideBar isActive={isSideBarActive} menuClick={toggleSideBar} />
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
      </Router>

    </>
  )
}

export default Home;
