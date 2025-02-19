import React from 'react';
import './About.scss'
import SectionCard from '../../components/SectionCard/SectionCard';
import Dropdown from '../../components/Dropdown/Dropdown';
import Img from '../../assets/aboutImg.png';

//LA PAGE A PROPOS CONTENANT LES DROPDOWNS POUR LES SECTIONS
export default function About() {
   document.title = 'A Propos - Kasa'
   return (<>
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
      <SectionCard img={Img} alt="logo card de la page A Propos" />
      <div class="aboutContent">
         <Dropdown title="Fiabilité" desc="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
         <Dropdown title="Respect" desc="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
         <Dropdown title="Service" desc="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
         <Dropdown title="Securité" desc=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
   </>);
}