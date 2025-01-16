import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss'


//composant pour afficher une carte avec l'image de l'appartement et son titre dans la page d'accueil
export default function Card({ link, image, title}) {
   return (
      <Link to={link} className="card-link">
         <div className="card-img">
            <img src={image} alt="" />
         </div>
         <div className="card-title">{title}</div>
         <div className="card-overlay"></div>
      </Link>
   )
}