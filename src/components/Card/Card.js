import React from 'react';
import { Link } from 'react-router-dom'
import './Card.css'



export default function Card({ link, image, title }) {
   return (
      <Link to={link} className="card-link">
         <div className="card-img">
            <img src={image} alt="" />
         </div>
         <div className="card-title">{title}</div>
      </Link>
   )
}