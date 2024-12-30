import React, { useState } from 'react';
import './PassengerForm.css';

const PassengerForm = () => {
  const [showPassengers, setShowPassengers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);

  const handleChildrenChange = (e) => {
    const numChildren = parseInt(e.target.value, 10);
    setChildrenCount(numChildren);
    setChildrenAges(Array(numChildren).fill(''));
  };

  const handleAgeChange = (index, e) => {
    const newAges = [...childrenAges];
    newAges[index] = e.target.value;
    setChildrenAges(newAges);
  };

  const togglePassengers = () => {
    setShowPassengers(!showPassengers);
  };

  return (
    <div className="passenger-form-container">
      <div className="search-bar">
        <form className="search-form">
          <select name="avresort" className="dropdown">
            <option value="">Avresort</option>
            <option value="stockholm">Stockholm</option>
            <option value="gothenburg">Gothenburg</option>
            <option value="malmo">Malmo</option>
          </select>
          <select name="resemal" className="dropdown">
            <option value="">Resemål</option>
            <option value="berlin">Berlin</option>
            <option value="paris">Paris</option>
            <option value="london">Spanien</option>
            <option value="paris">Turkiet</option>
            <option value="london">Egypten</option>
          </select>
          <input type="date" className="dropdown" placeholder="Avresedatum" />
          <input type="date" className="dropdown" placeholder="Hemresedatum" />
          <div className="passenger-container">
            <button type="button" className="dropdown" onClick={togglePassengers}>Resenärer</button>
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
          <button type="submit" className="dropdown">Sök</button>
        </form>
      </div>
    </div>
  );
};

export default PassengerForm;
