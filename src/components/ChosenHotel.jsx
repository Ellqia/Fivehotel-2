import React from 'react';
import Infohotell from '../assets/Hotellinfo.jpg'; // Se till att denna bild finns
import BookingForm from './BookingForm'; // Se till att denna importväg är korrekt
import Nerja from './Nerja'; // Se till att denna importväg är korrekt

import './Chosenhotel.css'; // Se till att denna importväg är korrekt

function Hotelfact() {
  return (
    <>
      <div className="contentInfohotel">
        <div className="titlehotel">
          <h1 className="faktahotell">Om hotellet</h1>
        </div>
        <div className="columnsinfo">
          <div className="infotext">
            <p>
              Andalucien Inn är ett barnvänligt hotell i Nerja som erbjuder diverse barnaktiviteter
              och ett mysigt spa för hela familjen. Hotellet ligger beläget nära den vackra sandstranden Carabeillo,
              med fina klippor och frödiga omgivningar.
              <br />
              <br />
              För en bekvämare semester kan du njuta av hotellets måltidspaket - frukost, halvpension eller
              All Inclusive som serveras på buffé-restaurangen. Det finns både lokala och internationella
              rätter för alla smaker. Varför inte testa några av Nerjas godaste havsrätter?
              Eller en fräsch Club Sandwich vid poolbaren? Barn får alltid gratis glass
              oavsett måltidspaket!
              <br />
              <br />
              Gillar du träning? Då har du tillgång till ett helt nytt gym på nedre plan i huvudbyggnaden,
              där du även kan finna en stor spaanläggning för bastu, massage och sköna ansiktsbehandlingar!
            </p>
            <div className="fact-container">
              <div className="fact-item">
                <span className="fact-label">Wi-fi:</span> <span className="fact-line"></span> <span className="fact-value">Ja</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Hiss:</span> <span className="fact-line"></span> <span className="fact-value">Ja</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Pool:</span> <span className="fact-line"></span> <span className="fact-value">2</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Restaurang:</span> <span className="fact-line"></span> <span className="fact-value">3</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Bar:</span> <span className="fact-line"></span> <span className="fact-value">2</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Strand:</span> <span className="fact-line"></span> <span className="fact-value">500m</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Centrum:</span> <span className="fact-line"></span> <span className="fact-value">3,5km</span>
              </div>
            </div>
          </div>

          <div className="columnbox">
            <img src={Infohotell} alt="info" className="hotelinfo" />
          </div>
        </div>
      </div>

      <div className="headline-section">
        <h1 className="headline">Välj datum, rum och måltid</h1>
      </div>

      <BookingForm /> {/* Komponent för att välja rum och måltid */}
      <Nerja /> {/* Nerja-komponent */}
    </>
  );
}

export default Hotelfact;
