import React, { useContext } from 'react';
import './DarkModeToggle.scss';
import { DarkModeContext } from '../../context/DarkModeContext/DarkModeContext';

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className="dark-mode-toggle"
      onClick={() => setDarkMode(!darkMode)}
      role="button"
      aria-label={`Switch to ${darkMode ? "Light" : "Dark"} Mode`}>
      <span className="label">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      <i className={`fa-solid ${!darkMode ? "fa-sun" : "fa-moon"}`} aria-hidden="true"></i>
    </div>
  );
}