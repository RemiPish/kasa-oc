import React from 'react';
import logo from './../../assets/logo.png'
import './Header.css'



export default function Header() {
   return <div className='headerNav'>
      <a href="/" className="headerLogoDiv">
         <img className="logo" src={logo} alt="logo kasa" />
      </a>
      <div className="navDiv">
         <a href="/" className="headerLink">Accueil</a>
         <a href="/about" className="headerLink">A Propos</a>
      </div>
   </div>
}
