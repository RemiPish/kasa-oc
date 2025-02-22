import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Carousel.scss";

export default function Carousel({ images, onImageClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          console.log("🖼️ Image Clicked:", images[currentIndex]);
          onImageClick(images[currentIndex]); // Send the image URL to FullscreenContext
        }}
      />
      <span className="pic-count">
        {currentIndex + 1}/{images.length}
      </span>
    </div>
  );
}
