import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
     <footer>
      <div className='footer-content'>
        <h4>&copy; <span>{new Date().getFullYear()}</span><span> nextXio</span></h4>
        <p>All Rights Reserved.</p>
        </div>
     </footer>
  )
}

export default Footer;
