import React from "react";
import "./SectionCard.scss";

//la section avec header image utilisé sur les pages A Propos et Page Accueil
export default function SectionCard(props) {
   const divStyle = {
      filter: props.imgStyle === 'darken' ? 'brightness(50%)' : 'none',
   };

   return (
      <div className="cardImgDiv">
         <img style={divStyle} className="cardImg" src={props.img} alt={props.alt} />
         {props.imgStyle === 'darken' && <div className="homeHeaderTxt">
            <div>Chez vous, partout et ailleurs</div>
         </div>}
      </div>
   )
}