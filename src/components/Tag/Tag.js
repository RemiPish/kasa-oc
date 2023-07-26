import React from 'react';
import './Tag.scss'


//les balises utilisé dans la page d'une annonce
export default function Tag({ name }) {
   return <div className="tag">{name}</div>
}