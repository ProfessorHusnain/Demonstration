import React, { useState } from 'react'
import Header  from '../components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Banner from '../components/Banner';
import SideBar from '../components/SideBar';

const Home = () => {
    const [isSideBarActive,setIsSideBarActive]=useState(false);
 
    const toggleSideBar = () => {
    setIsSideBarActive(!isSideBarActive);
    }
    
 
    
  return (
    <>
       <Router>
      <Header isActive={isSideBarActive} menuClick={toggleSideBar}/>
      <SideBar isActive={isSideBarActive}/>
      </Router>
       
    </>
  )
}

export default Home;
