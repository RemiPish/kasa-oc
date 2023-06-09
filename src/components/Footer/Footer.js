import React from 'react';
import logo from './../../assets/logoFooter.png'
import './Footer.css'



export default function Footer() {
   return <div className='footerDiv'>
      <div className="FooterLogoDiv">
         <img className="logo" src={logo} alt="logo kasa" />
      </div>
      <div className="footerText">
         © 2020 Kasa. All rights reserved
      </div>
   </div>
}
