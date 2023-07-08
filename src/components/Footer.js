import React from 'react'
import '../styles/Footer.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {BsDiscord,BsTwitter,BsTwitch} from 'react-icons/bs'
const Footer = () => {
  return (
     <footer>
      <div className='footer-content'>
        <h4>&copy; <span>{new Date().getFullYear()}</span><span> nextXio</span></h4>
        <p>All Rights Reserved.</p>
        </div>
        <div className='social-links'>
        {/*  I think this is not compulsory yet 😄
        <AiFillGithub />
        <AiFillLinkedin />
        <BsDiscord />
        <BsTwitter/>
        <BsTwitch />*/}

        </div>
     </footer>
  )
}

export default Footer;
