import React from "react";
import "./Spinner.scss";

export default function Spinner({ darkMode, size = 80, logoSrc }) {
  return (
    <div className={`spinner-container ${darkMode ? "spinner-dark" : ""}`}>
      <div className="spinner-ring" style={{ width: size, height: size }}></div>
      <img
        className="spinner-logo"
        src={logoSrc}
        alt="Loading"
        style={{ width: size * 0.5 }} 
      />
    </div>
  );
}
