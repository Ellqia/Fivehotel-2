import React, { useState } from 'react';
import './StartHeader.css';

// StartHeader-komponenten: Visar en banner med sökfält för resor och hanterar antalet resenärer
function StartHeader() {
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
          src="https://www.edelmanfinancialengines.com/content/dam/efe/corporate-brand/production-web-assets/_unknown-stock/WEB_ED-estate-changes-coming.png"
          alt="Discover the treasures of the Costa Brava."
          className="banner-image"
        />
      </div>

      {/* Sökfält för resor */}
      <div className="search-bar">
        <form className="search-form">
          <select name="avresort" className="dropdown">
            <option value="">Avresort</option>
            <option value="stockholm">Stockholm</option>
            <option value="gothenburg">Gothenburg</option>
            <option value="malmo">Malmo</option>
            {/* Lägg till fler alternativ vid behov */}
          </select>
          <select name="resemal" className="dropdown">
            <option value="">Resemål</option>
            <option value="berlin">Berlin</option>
            <option value="paris">Paris</option>
            <option value="london">Spanien</option>
            <option value="paris">Turkiet</option>
            <option value="london">Egypten</option>
            {/* Lägg till fler alternativ vid behov */}
          </select>
          <input type="date" placeholder="Avresedatum" className="calendar-input" />
          <input type="date" placeholder="Hemresedatum" className="calendar-input" />
          <div className="passenger-container">
            <button type="button" onClick={togglePassengers}>Resenärer</button>
            {showPassengers && (
              <div className="passenger-dropdown">
                <label>Vuxna</label>
                <input
                  type="number"
                  placeholder="Vuxna"
                  min="1"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                />
                <label>Barn</label>
                <input
                  type="number"
                  placeholder="Barn"
                  min="0"
                  value={childrenCount}
                  onChange={handleChildrenChange}
                />
                {childrenAges.map((age, index) => (
                  <div key={index}>
                    <label htmlFor={`child-age-${index}`}>Barn {index + 1} Ålder</label>
                    <select
                      id={`child-age-${index}`}
                      value={age}
                      onChange={(e) => handleAgeChange(index, e)}
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
          <button type="submit">Sök</button>
        </form>
      </div>

      {/* Remsa med information */}
      <div className="strap">
        <p className="strap-text">Populära resmål</p>
      </div>
    </div>
  );
}

export default StartHeader;
