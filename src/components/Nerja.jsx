import React from 'react';
import Nerjabeach from '../assets/nerjabeach.jpg';
import './Chosenhotel.css';
import ImageSlider from './ImageSlider'; // Corrected path
import ImageSlider2 from './ImageSlider2'; // Corrected path

function Nerja() {
  return (
    <>
      <h2 className="title">Från Hotellet</h2>
      <ImageSlider />
      <div id="contentInfohotel">
        <div className="columnsinfo">
          <div id="columnbox">
            <img src={Nerjabeach} alt="info" className="hotelinfo" />
          </div>
          <div id="infotextnerja">
            <h1 id="faktanerja">Nerja</h1>
            <p>
              Costa del Sols juvel i Andalucien i södra Spanien ungefär en timme från Malagas flygplats, med flertalet fina sandstränder och populära grottor.
              En stad som är levande året runt med återkommande turister och en stor del invånare som skapar en mysig miljö. Det är också varmare här än i Malaga på grund av sitt instängda läge mellan bergen, vilket gör Nerja extra trevligt för dem som gillar värme.
              <br />
              <br />
              Här kan du avnjuta semestern med dykning, båtturer, olika vattensporter och vandring i bergen. Eller varför inte besöka stadens kända turistattraktion Cueva De Nerja eller utkiksplatsen Balcón De Europa? Där du även kan finna ett stort utbud av shopping, barer och restauranger.
              För de historieintresserade är Nerja även känd för sina äldre grottmålningar, från istiden 42 000 år sedan, som upptäcktes år 1959 och går att finna i Cueva De Nerja ovanför Maro i nordöstra Nerja. Vi erbjuder diverse dagsutflykter som går att boka på plats, ta kontakt med en av våra reseledare på hotellet så hjälper de dig!
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="passengers-section">
        <h2 className="title">Passengers' Posts</h2>
        <ImageSlider2 />
      </div>
    </>
  );
}

export default Nerja;
