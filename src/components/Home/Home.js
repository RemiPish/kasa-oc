import React from 'react';
import SectionCard from '../SectionCard/SectionCard';
import './Home.css'
import Img from "../../assets/homeImg.png"



export default function Home() {
   return (<SectionCard img={Img} alt="logo card de la page Accueil" />);
}
