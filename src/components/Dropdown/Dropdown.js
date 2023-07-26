import React from 'react';
import { useState } from "react";
import './Dropdown.scss'


//composent utilisé pour afficher un dropdown des sections
export default function Dropdown(props) {
   const [opened, setOpened] = useState(false);
   const toggleOpened = () => {
      setOpened(!opened);
   }
   let arrayDesc = [];
   if (Array.isArray(props.desc)) {
      props.desc.forEach((item) => {
         arrayDesc.push(item)
      })
   }

   return <div onClick={toggleOpened} className='dropdownDiv'>
      <div className="dropdownTitle">
         <div>{props.title}</div>
         {opened && <i className="fa fa-chevron-down" aria-hidden="true"></i>}
         {!opened && <i className="fa fa-chevron-up" aria-hidden="true"></i>}
      </div>
      {opened && !arrayDesc.length && <div className="dropdownDesc">{props.desc}</div>}
      {opened && arrayDesc.length && arrayDesc.map((content, index) => (
         <div className="dropdownDesc" key={`${content}-${index}`}>{content}</div>
      ))}
   </div>
}