import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonuppgifterFormular.css';

const PersonuppgifterFormular = () => {
  const navigate = useNavigate();

  // Funktion för att navigera till betalningsformulär
  const handleGoToPayment = () => {
    navigate('/betalning-formular');
  };

  // Funktion för att navigera tillbaka till HotelFact
  const handleGoBack = () => {
    navigate('/hotel/:id'); // Ersätt med den korrekta sökvägen till HotelFact
  };

  return (
    <section>
      <div className="personuppgifter-form-container">
        <h3 className="personuppgifter-rubrik">Personuppgifter resenär 1</h3>
        <div className="personuppgifter-form-wrapper">
          <div className="personuppgifter-form-column">
            <label>
              <input type="text" name="firstName" placeholder="Förnamn" className="personuppgifter-input-field" />
            </label>
            <label>
              <input type="text" name="lastName" placeholder="Efternamn" className="personuppgifter-input-field" />
            </label>
            <label>
              <input type="text" name="address" placeholder="Bostadadress" className="personuppgifter-input-field" />
            </label>
          </div>
          <div className="personuppgifter-form-column">
            <label>
              <input type="text" name="personalNumber" placeholder="Personnummer" className="personuppgifter-input-field" />
            </label>
            <label>
              <input type="text" name="phone" placeholder="Telefon" className="personuppgifter-input-field" />
            </label>
            <label>
              <input type="email" name="email" placeholder="Mailadress" className="personuppgifter-input-field" />
            </label>
          </div>
        </div>
        <div className="personuppgifter-button-container">
          <button className="personuppgifter-laggtill-button">Lägg till resenär</button>
          <button className="personuppgifter-save-btn">Spara dina uppgifter</button>
        </div>
        <div className="personuppgifter-button-container">
          <button className="personuppgifter-back-btn special-back-btn" onClick={handleGoBack}>Tillbaka</button>
          <button type="button" className="personuppgifter-continue-btn special-continue-btn" onClick={handleGoToPayment}> Till betalning</button>
        </div>
      </div>
    </section>
  );
};

export default PersonuppgifterFormular;
