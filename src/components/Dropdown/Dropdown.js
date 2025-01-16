import React, { useState, useContext } from "react";
import "./Dropdown.scss";
import { DarkModeContext } from '../../context/DarkModeContext/DarkModeContext';

// Component used to display a dropdown for sections
export default function Dropdown(props) {
   const [opened, setOpened] = useState(false);
   const { darkMode } = useContext(DarkModeContext);
   const toggleOpened = () => {
      setOpened(!opened);
   };

   const arrayDesc = Array.isArray(props.desc) ? props.desc : [];

   return (
      <div onClick={toggleOpened} className="dropdownDiv">
         <div className="dropdownTitle">
            <div>{props.title}</div>
            {opened ? (
               <i className="fa fa-chevron-up" aria-hidden="true"></i>
            ) : (
               <i className="fa fa-chevron-down" aria-hidden="true"></i>
            )}
         </div>
         {opened && (
            <div className={`dropdownContent ${opened ? "open" : ""}`}>
               {!arrayDesc.length && props.desc && (
                  <div className={`dropdownDesc ${darkMode ? 'dropdownDesc-dark' : ''}`}>{props.desc}</div>
               )}

               {arrayDesc.length > 0 &&
                  arrayDesc.map((content, index) => (
                     <div className={`dropdownDesc ${darkMode ? 'dropdownDesc-dark' : ''}`} key={`${content}-${index}`} style={{ "--index": index }}>
                        {content}
                     </div>
                  ))}
            </div>
         )}
      </div>
   );
}
