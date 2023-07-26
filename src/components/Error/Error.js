import React from 'react';
import './Error.scss'


//la page d'erreur quand l'url est invalide
export default function Error() {
   document.title = 'Erreur - Kasa'
   return (
      <div className="errorDiv">
         <div className="errorTitle">404</div>
         <div className="errorTxt">Oups! La page que vous demandez n'existe pas.</div>
         <a href="/">Retourner sur la page d'accueil</a>
      </div>
   );
}
