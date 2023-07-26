import React, { useState } from 'react';
import './Carousel.scss'


//composent utilisé dans la page d'annonce pour affichier les images d'appartement
export default function Carousel({ images }) {
   const [currentIndex, setCurrentIndex] = useState(0);

   //déplacement dans la liste des images où soit on recule/avance d'une page, ou soit on retourne à la première/derniere image selon l'index
   const goPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
   };

   const goNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
   };

   if (images.length === 0) {
      return <div>No images available.</div>;
   }

   if (images.length === 1) {
      return <img className="pic" src={images[0]} alt='' />;
   }
   return (
      <div className="pic-container">
         <i onClick={goPrevious} className="fa-solid fa-angle-left" />
         <i onClick={goNext} className="fa-solid fa-angle-right" />
         <img className="pic" src={images[currentIndex]} alt='' />
         <span className="pic-count">
            {currentIndex + 1}/{images.length}
         </span>
      </div>
   );
}