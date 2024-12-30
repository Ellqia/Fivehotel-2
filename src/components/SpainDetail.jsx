import React from 'react';
import { useParams } from 'react-router-dom';
import './SpainDetail.css';

// Hotellistan: Array med hotellobjekt och deras egenskaper
const hotels = [
  {
    id: 1,
    name: 'Hotel Barcelona',
    description: '',
    price: 1500,
    image: 'https://hotelesromanticos.info/wp-content/uploads/2019/07/suite-colonial-1024x683.jpg',
    breakfast: true,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Costa del Sol Resort',
    description: 'Beautiful beachfront resort on the Costa del Sol',
    price: 1200,
    image: 'https://araamdetours.com/wp-content/uploads/2023/08/family-friendly-getaways-fun-filled-destinations_1.jpg',
    breakfast: true,
    rating: 4.0
  },
  // Fler hotell kan läggas till vid behov
];

// SpainDetail-komponenten: Visar detaljer om ett specifikt hotell
function SpainDetail() {
  const { id } = useParams(); // Hämtar id-parametern från URL:en
  const hotel = hotels.find(h => h.id === parseInt(id)); // Hittar hotellet med det matchande id:t

  if (!hotel) {
    return <div>Hotel not found</div>; // Visar meddelande om hotellet inte hittas
  }

  return (
    <div className="hotel-detail">
      {/* Hotellbild */}
      <img src={hotel.image} alt={hotel.name} />
      {/* Hotellnamn */}
      <h1>{hotel.name}</h1>
      {/* Hotellbeskrivning */}
      <p>{hotel.description}</p>
      {/* Hotellpris */}
      <p>Price: {hotel.price} SEK per night</p>
      {/* Hotellbetyg */}
      <p>Rating: {hotel.rating} stars</p>
      {/* Frukostinformation */}
      <p>Breakfast included: {hotel.breakfast ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default SpainDetail;
