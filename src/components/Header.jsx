import React from 'react';
import Logo from '../assets/file.png';
import './Header.css'; // Importerar CSS-filen

function Header() {
  return (
    <header className="header">
      {/* Logotypen, flyttad utanför <nav> */}
      <div id="logo">
        <img src={Logo} alt="AndalucienInn" width="170" height="170" />
      </div>

      {/* Navigationsmeny */}
      <nav>
        <ul>
          <li><a href="#">RESOR</a></li>
          <li><a href="#">HOTELL</a></li>
          <li><a href="#">MIN SIDA</a></li>
        </ul>
      </nav>

      {/* Sök-knapp */}
      <button className="sok-button">Sök</button>
    </header>
  );
}

export default Header;
