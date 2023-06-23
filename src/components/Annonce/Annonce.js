import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Tag from '../Tag/Tag';
import Collapse from '../Collapse/Collapse';

import './Annonce.css'

function Annonce() {
   const { annonceID } = useParams();
   const [jsonData, setJsonData] = useState(null);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(window.location.origin + '/annonces.json', {
               headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
               }
            }
            )
            const data = await response.json();
            setJsonData(data);
         } catch (error) {
            console.error('Error fetching JSON data:', error);
         }
      };

      fetchData();
   }, []);
   if (!jsonData) {
      return <div>Loading...</div>;
   }
   if (jsonData) {

      let annonce = jsonData.find(
         (a) => a.id === annonceID
      )
      const firstName = annonce.host.name.split(' ')[0];
      const lastName = annonce.host.name.split(' ')[1];
      document.title = annonce.title + ' - Kasa';
      return (
         <div>
            <div className="annonce-info-div">
               <div className="annonce-info">
                  <div className="annonce-title">{annonce.title}</div>
                  <div className="annonce-location">
                     {annonce.location}
                  </div>
                  <div className="tag-div">
                     {annonce.tags.map((tag, index) => (
                        <Tag name={tag} key={`${index}-${tag}`} />
                     ))}
                  </div>
               </div>
               <div className="annonce-info rating-div">
                  <div className="annonce-info-profile">
                     <div className="name">
                        <div>{firstName}</div>
                        <div>{lastName}</div>
                     </div>
                     <div className="host-img">
                        <img
                           src={annonce.host.picture}
                           alt='hostPic'
                        />
                     </div>
                  </div>
                  <div className="annonce-rating">
                     {Array.from({ length: 5 }).map((_, index) => (
                        <i key={index} className={`fa-solid fa-star  ${index < annonce.rating ? 'colored' : 'gray'}`} ></i>
                     ))}
                  </div>

               </div>
            </div>
            <div className="annonce-body">
               <Collapse
                  title="Description"
                  desc={annonce.description}
               />
               <Collapse
                  title="Equipements"
                  desc={annonce.equipments}
               />
            </div>
         </div >
      )
   }
}


export default Annonce