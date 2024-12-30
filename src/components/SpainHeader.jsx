import React, { useState } from 'react';
import './SpainHeader.css';

// SpainHeader-komponenten: Visar en banner med sökfält för resor till Spanien
function SpainHeader() {
  const [showPassengers, setShowPassengers] = useState(false); // Hanterar visning av passagerar-dropdown
  const [adults, setAdults] = useState(1); // Antal vuxna resenärer
  const [childrenCount, setChildrenCount] = useState(0); // Antal barnresenärer
  const [childrenAges, setChildrenAges] = useState([]); // Åldrar för barnresenärer

  // Hanterar förändring av antal barn
  const handleChildrenChange = (e) => {
    const numChildren = parseInt(e.target.value, 10);
    setChildrenCount(numChildren);
    setChildrenAges(Array(numChildren).fill(''));
  };

  // Hanterar förändring av barns åldrar
  const handleAgeChange = (index, e) => {
    const newAges = [...childrenAges];
    newAges[index] = e.target.value;
    setChildrenAges(newAges);
  };

  // Hanterar visning och gömning av passagerar-dropdown
  const togglePassengers = () => {
    setShowPassengers(!showPassengers);
  };

  return (
    <div>
      {/* Banner med bild och text */}
      <div className="banner">
        <img
          src="https://www.fodors.com/wp-content/uploads/2019/10/10_BestBeachesinSpain__CalaMacarella_shutterstock_1131032666-2048x1275.jpg"
          alt="Discover the treasures of the Costa Brava."
          className="banner-image"
        />
        <div className="banner-text">
          <h1 className="banner-heading">Njut av din semester<br />i Spanien!</h1>
        </div>
      </div>

      {/* Sökfält för resor */}
      <div className="search-bar">
        <form className="search-form">
          <select name="avresort" className="spain-dropdown">
            <option value="">Avresort</option>
            <option value="stockholm">Stockholm</option>
            <option value="gothenburg">Gothenburg</option>
            <option value="malmo">Malmo</option>
          </select>
          <select name="resemal" className="spain-dropdown">
            <option value="">Resemål</option>
            <option value="berlin">Tyskland</option>
            <option value="paris">Paris</option>
            <option value="london">Spanien</option>
            <option value="turkey">Turkiet</option>
            <option value="egypt">Egypten</option>
          </select>
          <input type="date" placeholder="Avresedatum" className="spain-date" />
          <input type="date" placeholder="Hemresedatum" className="spain-date" />
          <div className="passenger-container">
            <button type="button" onClick={togglePassengers}>Resenärer</button>
            {showPassengers && (
              <div className="spain-passenger-dropdown">
                <div className="spain-passenger-row">
                  <label>Vuxna</label>
                  <input
                    type="number"
                    placeholder="Vuxna"
                    min="1"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                    className="spain-input"
                  />
                </div>
                <div className="spain-passenger-row">
                  <label>Barn</label>
                  <input
                    type="number"
                    placeholder="Barn"
                    min="0"
                    value={childrenCount}
                    onChange={handleChildrenChange}
                    className="spain-input"
                  />
                </div>
                {childrenAges.map((age, index) => (
                  <div key={index} className="spain-passenger-row">
                    <label htmlFor={`spain-child-age-${index}`}>Barn {index + 1} Ålder</label>
                    <select
                      id={`spain-child-age-${index}`}
                      value={age}
                      onChange={(e) => handleAgeChange(index, e)}
                      className="spain-dropdown"
                    >
                      <option value="">Välj ålder</option>
                      {[...Array(18).keys()].map((ageOption) => (
                        <option key={ageOption} value={ageOption}>
                          {ageOption}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
          <button type="submit" className="spain-search-button">Sök</button>
        </form>
      </div>

      {/* Remsa med information */}
      <div className="strap">
        <p className="strap-text">Hitta din favorit Hotel i Spanien!</p>
      </div>
    </div>
  );
}

export default SpainHeader;
