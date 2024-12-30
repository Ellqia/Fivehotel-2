import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BokningButton.css'; // Se till att sökvägen är korrekt

const BokningButton = () => {
  const navigate = useNavigate();

  // Funktion för att navigera till BookingForm-komponenten
  const handleClick = () => {
    navigate('/booking-form'); // Navigera till BookingForm-komponenten
  };

  return (
    <button className="bokning-button" onClick={handleClick}>
      Ändra bokning
    </button>
  );
};

export default BokningButton;
