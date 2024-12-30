import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './BookingForm.css';  // Import the CSS file
import './ImageSlider';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState(['']); // Array to hold child ages
  const [roomType, setRoomType] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [mealOption, setMealOption] = useState('');
  const [bookingSummary, setBookingSummary] = useState(null); // State to hold booking summary

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChildAgesChange = (index, value) => {
    const updatedAges = [...childAges];
    updatedAges[index] = value;
    setChildAges(updatedAges);
  };

  const handleChildrenChange = (e) => {
    const numberOfChildren = Number(e.target.value);
    setChildren(numberOfChildren);
    setChildAges(Array(numberOfChildren).fill(''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a summary of the booking details
    const summary = `
      Du har valt:
      - Incheckningsdatum: ${checkInDate}
      - Utcheckningsdatum: ${checkOutDate}
      - Vuxna: ${guests}
      - Barn: ${children} (Ålder: ${childAges.join(', ')})
      - Rumstyp: ${roomType}
      - Antal rum: ${numberOfRooms}
      - Måltidsalternativ: ${mealOption}
    `;
    setBookingSummary(summary);
  };

  const handleGoWithBooking = () => {
    navigate('/bokning'); // Navigate to BokningCard component
  };

  return (
    <>
      <h1 className="headline">Välja datum, rum och måltid!</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Incheckningsdatum:
          <input 
            type="date" 
            value={checkInDate} 
            onChange={(e) => setCheckInDate(e.target.value)} 
          />
        </label>
        <label>
          Utcheckningsdatum:
          <input 
            type="date" 
            value={checkOutDate} 
            onChange={(e) => setCheckOutDate(e.target.value)} 
          />
        </label>
        <label>
          Vuxna:
          <input 
            type="number" 
            value={guests} 
            onChange={(e) => setGuests(Number(e.target.value))} 
            min="1" 
          />
        </label>
        <label>
          Barn:
          <input 
            type="number" 
            value={children} 
            onChange={handleChildrenChange} 
            min="0" 
          />
        </label>
        {Array.from({ length: children }).map((_, index) => (
          <label key={index}>
            Barn ålder {index + 1}:
            <input 
              type="number" 
              value={childAges[index]} 
              onChange={(e) => handleChildAgesChange(index, e.target.value)} 
              min="0" 
            />
          </label>
        ))}
        <label>
          Rum:
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Välj rum</option>
            <option value="doubleBedPoolView">Dubbelrum med Poolutsikt</option>
            <option value="suiteSeaView">Svit med Havsutsikt</option>
            <option value="standardRoom">Standardrum</option>
          </select>
        </label>
        <label>
          Antal rum:
          <select value={numberOfRooms} onChange={(e) => setNumberOfRooms(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <label>
          Måltidsalternativ:
          <select value={mealOption} onChange={(e) => setMealOption(e.target.value)}>
            <option value="">Välj måltidsalternativ</option>
            <option value="breakfast">Frukost</option>
            <option value="halfBoard">Halvpension</option>
            <option value="allInclusive">All Inclusive</option>
          </select>
        </label>
        <button type="submit" className="select-button">Välj</button>
      </form>
      {bookingSummary && (
        <div className="booking-summary">
          <h2>Bokningssammanfattning</h2>
          <pre>{bookingSummary}</pre>
        </div>
      )}
      <div className="center-button">
        <button type="button" className="go-booking-button" onClick={handleGoWithBooking}>Gå vidare till Bokning</button>
      </div>
    </>
  );
};

export default BookingForm;
