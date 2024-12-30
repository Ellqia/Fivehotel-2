import './Chosenhotel.css';
import React from 'react';

import ChosenHotelHeader from './ChosenHotelHeader';
import BookingForm from './BookingForm';
import bannerPic from '../assets/BANNER-chosenhotel.jpg';
import Nerja from './Nerja';

function Hotelfact() {
  return (
    <>
    
    
      <img src={bannerPic} alt="Banner" className="banner-img" />
      <div id="contentInfohotel">
      <div className="strap">
        <h3 className="strap-text">Om Hotelet</h3>
    
    </div>
        <div className="columnsinfo">
          <div id="infotext" className="leftText">
            <p>
              Andalucien Inn är ett barnvänligt hotell i Nerja som erbjuder diverse barnaktiviteter
              och ett mysigt spa för hela familjen. Hotellet ligger beläget nära den vackra sandstranden Carabeillo,
              med fina klippor och frödiga omgivningar.
              <br />
              <br />
              För en bekvämare semester kan du njuta av hotellets måltidspaket- frukost, halvpension eller
              All Inclusive som serveras på buffé-restaurangen. Det finns både lokala och internationella
              rätter för alla smaker. Varför inte testa några av Nerjas godaste havsrätter?
              Eller en fräsch Club Sandwich vid poolbaren? Barn får alltid gratis glass
              oavsett måltidspaket!
              <br />
              <br />
              Gillar du träning? Då har du tillgång till ett helt nytt gym på nedre plan i huvudbyggnaden,
              där du även kan finna en stor spaanläggning för bastu, massage och sköna ansiktsbehandlingar!
            </p>
          </div>
          <div id="columnbox" className="faktaruta">
            <h2>Hotelfakta</h2>
            <div className="facts">
              <ul>
                <li>Wi-fi: <span>Ja</span></li>
                <li>Hiss: <span>Ja</span></li>
                <li>Pool: <span>2</span></li>
                <li>Restaurang: <span>3</span></li>
                <li>Bar: <span>2</span></li>
                <li>Strand: <span>500m</span></li>
                <li>Centrum: <span>3,5km</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BookingForm />
      <Nerja />
    </>
  );
}

export default Hotelfact;
