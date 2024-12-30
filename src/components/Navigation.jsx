import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navigation.css';

// Navigation-komponenten: Ansvarar för att rendera toppnavigeringsfältet
const Navigation = () => {
  return (
    <header className="header">
      {/* Logotyp */}
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      {/* Navigationsmeny */}
      <nav className="nav">
        <ul className="nav-links">
          {/* Navigationslänkar */}
          <li><Link to="/">Resor</Link></li>
          <li><Link to="/about">Hotel</Link></li>
          <li><Link to="/contact">Min sida</Link></li>
        </ul>
      </nav>
      {/* Sökknapp */}
      <button className="search-button">Sök</button>
    </header>
  );
};

export default Navigation;
