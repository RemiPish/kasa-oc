import React, { useState, useEffect } from 'react';
import SectionCard from '../SectionCard/SectionCard';
import './Home.css'
import Img from "../../assets/homeImg.png"
import Card from '../Card/Card';



export default function Home() {
   document.title = 'Accueil - Kasa';
   const [jsonData, setJsonData] = useState(null);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch('./annonces.json', {
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
   return (
      <div className="homeDiv">
         <SectionCard imgStyle="darken" img={Img} alt="logo card de la page Accueil" />
         {jsonData && (
            <div className="cardListDiv">
               {jsonData.map(item => (
                  <Card key={item.id}
                     link={'annonce/' + item.id}
                     image={item.cover}
                     title={item.title}


                  />
               ))}
            </div>
         )}
      </div>

   );
}
