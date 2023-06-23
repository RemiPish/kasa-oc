import React from 'react';
import { useState } from "react";
import './Collapse.css'



export default function Collapse(props) {
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

   return <div onClick={toggleOpened} className='collapseDiv'>
      <div className="collapseTitle">
         <div>{props.title}</div>
         {opened && <i className="fa fa-chevron-down" aria-hidden="true"></i>}
         {!opened && <i className="fa fa-chevron-up" aria-hidden="true"></i>}
      </div>
      {opened && !arrayDesc.length && <div className="collapseDesc">{props.desc}</div>}
      {opened && arrayDesc.length && arrayDesc.map((content, index) => (
         <div className="collapseDesc" key={`${content}-${index}`}>{content}</div>
      ))}
   </div>
}