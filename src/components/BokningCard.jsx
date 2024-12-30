import React from 'react';
import './BokningCard.css';
import bannerPic from '../assets/bokning-banner.jpg'; // Ensure the path is correct
import ChosenhotelPic from '../assets/chosenhotel.jpg'; // Ensure the path is correct
import Strap from './Strap';
import TillbakaButton from './TillbakaButton';
import PersonuppgifterFormular from './PersonuppgifterFormular';
import BokningButton from './BokningButton'; // Ensure the path is correct

function Card() {
  return (
    <>
      <img src={bannerPic} alt="bokning-banner" className="banner-img" />
      <Strap text="Din bokning" />

      <div className="bokning-grid-container">
        <div className="text-section">
          <h3>Hotell</h3>
          <p>Andalucien Inn, Nerja, Spanien</p>
          <div className="dates-container">
            <div className="date-group">
              <span className="departure-date">Avresedatum:</span>
              <span className="avresedatum">22 juli</span>
            </div>
            <div className="date-group">
              <span className="arrival-date">Hemresedatum:</span>
              <span className="hemdatum">29 juli</span>
            </div>
          </div>
          <h3>Resenärer</h3>
          <p>3 vuxna, 2 barn</p>
          <h3>Boende</h3>
          <p>1 st Standarlägenhet-balkong havsutsikt</p>
          <p>1 st Studio-terass med poolutsikt</p>
          <h3>Övrigt</h3>
          <p>All inclusive</p>
          <h3>Valbara tillval:</h3>
          <div className="valj-container">
            <div className="valj-item">
              <h4>Rum bredvid varandra</h4>
              <button className="valj-button">Välj</button>
            </div>
            <div className="valj-item">
              <h4>Lägenhet i markplan</h4>
              <button className="valj-button">Välj</button>
            </div>
            <div className="valj-item">
              <h4>Transfer</h4>
              <button className="valj-button">Välj</button>
            </div>
          </div>
          <h3>Totalpris</h3>
          <div className="price-button-container">
            <p>56 000 kr</p>
            <BokningButton />
          </div>
        </div>
        <div className="image-section">
          <img src={ChosenhotelPic} alt="chosenhotel.jpg" className="chosen-hotel-img" />
        </div>
      </div>

      <PersonuppgifterFormular />
    </>
  );
}

export default Card;
