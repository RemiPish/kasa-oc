import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Card.scss';


//composant pour afficher une carte avec l'image de l'appartement et son titre dans la page d'accueil
export default function Card({ link, image, title }) {
   return (
      <Link to={link} className="card-link">
         <div className="card-img">
            <LazyLoadImage
               src={image}
               alt={title}
               effect="blur"
               width="100%"
               height="auto"
            />
         </div>
         <div className="card-title">{title}</div>
         <div className="card-overlay"></div>
      </Link>
   )
}