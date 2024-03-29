import { useParams, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Tag from '../../components/Tag/Tag';
import Dropdown from '../../components/Dropdown/Dropdown';
import Carousel from '../../components/Carousel/Carousel';

import './Annonce.scss'

export default function Annonce() {
   const navigate = useNavigate();
   //id d'annonce utilisé pour retrouver l'annonce dans la liste
   const { annonceID } = useParams();
   const [jsonData, setJsonData] = useState(null);
   //on recupere les données d'annonces du json
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
   //on cherche dans la liste des annonces par id pour retrouver l'annonce à afficher
   if (jsonData) {
      let annonce = jsonData.find(
         (a) => a.id === annonceID
      )
      if (!annonce) {

         navigate('/404');
      }
      else {
         const firstName = annonce.host.name.split(' ')[0];
         const lastName = annonce.host.name.split(' ')[1];
         document.title = annonce.title + ' - Kasa';
         return (
            <div>
               <div className="annonce-pic-container">
                  <Carousel images={annonce.pictures} />
               </div>
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
                  <div className="annonce-info-rating rating-div">
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
                  <Dropdown
                     title="Description"
                     desc={annonce.description}
                  />
                  <Dropdown
                     title="Equipements"
                     desc={annonce.equipments}
                  />
               </div>
            </div >
         )
      }

   }
}