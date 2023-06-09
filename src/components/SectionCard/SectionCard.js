import React from "react";
import "./SectionCard.css";

export default function SectionCard(props) {
   return (
      <div className="cardImgDiv">
         <img className="cardImg" src={props.img} alt={props.alt} />
      </div>
   )
}