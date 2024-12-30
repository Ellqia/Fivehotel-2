import React from 'react';
import './Bekraftelse.css'; 
import Strap from './Strap.jsx';
import TillbakaButton from './TillbakaButton.jsx';
import Biljett from '../assets/Biljett.png';
import bannerPic from '../assets/bekreftelse-banner.jpg'; // Se till att denna bild existerar

const Bekraftelse = () => {
  return (
    <>
      <img src={bannerPic} alt="Banner" className="bekraftelse-banner-img" /> {/* Se till att bannerPic är definierad */}
      <Strap text="Din betalning" />
      <div className="bekraftelse-container">
        <img className="bekraftelse-biljett-bild" src={Biljett} alt="Biljett.png" />
        <h2>Tack för din bokning.</h2> 
        <h2>Ditt bokningsnummer är 22 35 38 33.</h2>
        <p>En bokningsbekräftelse har skickats till din mail. Du hittar även information om din resa på Mina sidor. Vid frågor kontakta vår kundtjänst på telefon 0771-10 11 12 eller maila till resmer.se.</p>
        <h2>ResMer önskar dig en trevlig resa!</h2>
      </div>
    </>
  );
};

export default Bekraftelse;
