import React, { useState, useEffect, useContext } from 'react';
import SectionCard from '../../components/SectionCard/SectionCard';
import './Home.scss'
import Img from "../../assets/homeImg.png"
import Card from '../../components/Card/Card';
import logo from '../../assets/logo.png';
import Spinner from "../../components/Spinner/Spinner";
import { DarkModeContext } from '../../context/DarkModeContext/DarkModeContext';
import { motion } from "framer-motion";

//LA PAGE ACCUEIL CONTENANT LA LISTE DES ANNONCES
export default function Home() {
   document.title = 'Accueil - Kasa';

   //Donnée annonces apartements
   const [jsonData, setJsonData] = useState(null);
   const { darkMode } = useContext(DarkModeContext);

   useEffect(() => {
      //on recupere les données d'annonces du json
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
      return (
         <Spinner darkMode={darkMode} size={100} logoSrc={logo} />
      );
   }

   const pageVariants = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
   };

   //on affiche les données d'annonces dans la page utilisant le composant Card
   return (
      <>
         <Helmet>
            <title>Annonces Immobilières – Trouvez votre Appartement | Kasa</title>
            <meta name="description" content="Découvrez les meilleures annonces immobilières en France. Trouvez facilement un appartement ou une maison à louer ou à acheter." />
            <meta name="keywords" content="annonces immobilières, appartement à louer, maison à vendre, immobilier France, location, achat" />
            <meta name="author" content="Rémi Phyu" />
            <meta property="og:title" content="Annonces Immobilières – Trouvez votre Appartement | Kasa" />
            <meta property="og:description" content="Découvrez les meilleures annonces immobilières en France." />
            <meta property="og:image" content="src\assets\logo.png" />
            <meta property="og:url" content="https://kasa-oc-ten.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="src\assets\homeImg.png" />
            <meta name="twitter:title" content="Annonces Immobilières – Trouvez votre Appartement | Kasa" />
            <meta name="twitter:description" content="Découvrez les meilleures annonces immobilières en France." />
            <meta name="twitter:image" content="src\assets\logo.png" />
            <html lang="fr" />
         </Helmet>

         <motion.div
            className="homeDiv"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
         >
            <SectionCard imgStyle="darken" img={Img} alt="logo card de la page Accueil" />
            {jsonData && (
               <div className={`cardListDiv ${darkMode ? 'cardListDiv-dark' : ''}`} >
                  {jsonData.map((item) => (
                     <Card key={item.id}
                        link={'annonce/' + item.id}
                        image={item.cover}
                        title={item.title}
                     />
                  ))}
               </div>
            )}
         </motion.div>
      </>
   );
}
