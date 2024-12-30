import React from 'react';
import './Strap.css'; // Importerar CSS-filen för strap

// Strap-komponenten: Visar en remsa med text som skickas som prop
const Strap = ({ text }) => {
  return (
    <div className="strap">
      <p className="strap-text">{text}</p>
    </div>
  );
};

export default Strap;
