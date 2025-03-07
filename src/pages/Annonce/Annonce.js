import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Tag from "../../components/Tag/Tag";
import Dropdown from "../../components/Dropdown/Dropdown";
import Carousel from "../../components/Carousel/Carousel";
import logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import "./Annonce.scss";
import { DarkModeContext } from "../../context/DarkModeContext/DarkModeContext";
import { useFullscreen } from "../../context/FullscreenContext/FullscreenContext";
import Spinner from "../../components/Spinner/Spinner";
import { Helmet } from "react-helmet";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Annonce() {
   const navigate = useNavigate();
   const { annonceID } = useParams();
   const [jsonData, setJsonData] = useState(null);
   const { darkMode } = useContext(DarkModeContext);
   const { fullscreenImage, setFullscreenImage } = useFullscreen();
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(window.location.origin + "/annonces.json", {
               headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
               },
            });
            const data = await response.json();
            setJsonData(data);
         } catch (error) {
            console.error("Error fetching JSON data:", error);
         }
      };

      fetchData();
   }, []);


   if (!jsonData) {
      return <Spinner darkMode={darkMode} size={100} logoSrc={logo} />;
   }

   let annonce = jsonData.find((a) => a.id === annonceID);
   if (!annonce) {
      navigate("/404");
      return null;
   }

   const goPrevious = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? annonce.pictures.length - 1 : prevIndex - 1
      );
      setFullscreenImage(annonce.pictures[currentIndex === 0 ? annonce.pictures.length - 1 : currentIndex - 1]);
   };

   const goNext = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === annonce.pictures.length - 1 ? 0 : prevIndex + 1
      );
      setFullscreenImage(annonce.pictures[currentIndex === annonce.pictures.length - 1 ? 0 : currentIndex + 1]);
   };

   const firstName = annonce.host.name.split(" ")[0];
   const lastName = annonce.host.name.split(" ")[1];
   document.title = annonce.title + " - Kasa";
   return (
      <>
         <Helmet>
            <title>{annonce.title} - Kasa</title>
            <meta name="description" content={annonce.description} />
            <meta name="keywords" content="annonces immobilières, appartement, maison, location, achat" />
            <meta name="author" content="Rémi Phyu" />
            <meta property="og:title" content={annonce.title} />
            <meta property="og:description" content={annonce.description} />
            <meta property="og:image" content={annonce.pictures[0]} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={annonce.title} />
            <meta name="twitter:description" content={annonce.description} />
            <meta name="twitter:image" content={annonce.pictures[0]} />
            <html lang="fr" />
         </Helmet>

         {!fullscreenImage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
               <div className="annonce-pic-container">
                  <Carousel
                     images={annonce.pictures}
                     currentIndex={currentIndex}
                     setCurrentIndex={setCurrentIndex}
                     onImageClick={(img) => {
                        setFullscreenImage(img);
                        setCurrentIndex(annonce.pictures.indexOf(img));
                     }} />
               </div>

               <div className="annonce-info-div">
                  <div className="annonce-info">
                     <div className="annonce-title">{annonce.title}</div>
                     <div className="annonce-location">{annonce.location}</div>
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
                           <img src={annonce.host.picture} alt="Hôte" />
                        </div>
                     </div>
                     <div className="annonce-rating">
                        {Array.from({ length: 5 }).map((_, index) => (
                           <i key={index} className={`fa-solid fa-star  ${index < annonce.rating ? "colored" : "gray"}`}></i>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="annonce-body">
                  <Dropdown title="Description" desc={annonce.description} />
                  <Dropdown title="Équipements" desc={annonce.equipments} />
               </div>
            </motion.div>
         )}
         <AnimatePresence>
            {fullscreenImage && (
               <motion.div className="fullscreen-overlay" initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <motion.img src={fullscreenImage} alt="Annonce en plein écran" className="fullscreen-image" initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.3 }} />
                  <motion.button className="arrow-btn left" onClick={goPrevious} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                     <FaChevronLeft size={40} />
                  </motion.button>
                  <motion.button className="arrow-btn right" onClick={goNext} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                     <FaChevronRight size={40} />
                  </motion.button>
                  <motion.button className="close-btn" onClick={() => setFullscreenImage(null)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                     <FaTimes size={30} />
                  </motion.button>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}