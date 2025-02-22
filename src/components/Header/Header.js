import React from 'react';
import logo from './../../assets/logo.png'
import './Header.scss'
import { useLocation } from 'react-router-dom';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { useFullscreen } from "../../context/FullscreenContext/FullscreenContext";

//l'entete des pages du site contentant le logo et les liens vers les pages 
export default function Header() {
   const location = useLocation();
   const { fullscreenImage } = useFullscreen();

   if (fullscreenImage) return null;

   return <div className='headerNav'>
      <a href="/" className="headerLogoDiv">
         <img className="logo" src={logo} alt="logo kasa" />
      </a>
      <div className="navDiv">
         <a href="/" className={`headerLink ${location.pathname === '/' ? 'active' : ''}`}>Accueil</a>
         <a href="/about" className={`headerLink ${location.pathname === '/about' ? 'active' : ''}`}>A Propos</a>
         <div className="darkModeToggleDiv">
            <DarkModeToggle />
         </div>
      </div>

   </div>
}
