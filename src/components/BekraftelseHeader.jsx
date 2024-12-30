import React from 'react';
import './SpainHeader.css';

function ChosenHotelHeader() {
  return (
    <div>
      {/* Banner med bild och text */}
      <div className="BANNER-chosenhotel">
        <img
          src="BANNER-chosenhotel.jpg"
          alt="Discover the treasures of the Costa Brava."
          className="BANNER-chosenhotel-image"
        />
      </div>
      {/* Remsa med information */}
      <div className="strap">
        <p className="strap-text">Hitta din favoritlägenhet i Spanien!</p>
      </div>
    </div>
  );
}

export default ChosenHotelHeader;
