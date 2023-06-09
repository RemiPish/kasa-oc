import React from 'react';
import { useState } from "react";
import './Collapse.css'



export default function Collapse(props) {
   const [opened, setOpened] = useState(false); // je definie le state du toggle (et false par défaut)

   const toggleOpened = () => {
      setOpened(!opened);
   }

   const divStyle = {
      width: props.width || '100%', // Set the width based on the "width" prop, defaulting to 100% if not provided
    };

    
   return <div onClick={toggleOpened}  style={divStyle} className='collapseDiv'>
      <div className="collapseTitle">
         <div>{props.title}</div>
         {opened && <i class="fa fa-chevron-down" aria-hidden="true"></i>}
         {!opened && <i class="fa fa-chevron-up" aria-hidden="true"></i>}
      </div>
      {opened && <div className="collapseDesc">{props.desc}</div>}
   </div>
}