import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Carousel.scss";

export default function Carousel({ images, currentIndex, setCurrentIndex, onImageClick }) {

   useEffect(() => {
   }, [currentIndex]);

   const goPrevious = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
   };

   const goNext = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
   };

   if (images.length === 0) {
      return <div>No images available.</div>;
   }

   return (
      <div className="pic-container">
         <i onClick={goPrevious} className="fa-solid fa-angle-left" />
         <i onClick={goNext} className="fa-solid fa-angle-right" />

         <LazyLoadImage
            src={images[currentIndex]}
            alt=""
            effect="blur"
            width="100%"
            height="auto"
            className="pic"
            onClick={() => {
               onImageClick(images[currentIndex]);
            }}
         />
         <span className="pic-count">
            {currentIndex + 1}/{images.length}
         </span>
      </div>
   );
}
