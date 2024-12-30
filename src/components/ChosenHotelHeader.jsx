import React from 'react';
import './ChosenHotelHeader.css'; // Se till att denna importväg är korrekt
import BannerImage from '../assets/BANNER-chosenhotel.jpg'; // Importera bilden från assets-mappen

function ChosenHotelHeader() {
  return (
    <div>
      {/* Banner med bild och text */}
      <div className="BANNER-chosenhotel">
        <img
          src={BannerImage}
          alt="Discover the treasures of the Costa Brava."
          className="BANNER-chosenhotel-image"
        />
      </div>
    </div>
  );
}

export default ChosenHotelHeader;
