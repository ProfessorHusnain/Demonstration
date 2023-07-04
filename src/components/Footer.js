import React from 'react'
import '../styles/Footer.css'
const Footer = () => {
  return (
     <footer>
        <h4>&copy;<span>{new Date().getFullYear()}</span><span> nextXio</span></h4>
         
     </footer>
  )
}

export default Footer;
