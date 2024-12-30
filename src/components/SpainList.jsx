import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SpainList.css';
import cupIcon from '../assets/cup-icon-md.png';
import mapIcon from '../assets/mapicon.png';
import SpainHeader from './SpainHeader';

const hotels = [
  { 
    id: 1, 
    name: 'Hotel Barcelona', 
    description: 'Detta familjevänliga hotell ligger i Barcelonas strandområde. Superior-rum (med extrasäng, barn), gratis Wi-Fi och luftkonditionerade rum med och nära till natur och kommunikation. Hotellet har även en restaurang med barnmenyer och hälsoanpassade måltider för äldre, samt lättillgängliga rum med alla nödvändiga faciliteter. Sol y Mar är inte bara en plats att bo på – det är en plats där familjeminnen skapas och alla generationer kan njuta av sin semester tillsammans.', 
    price: '1500 SEK/natt', 
    image: 'https://hotelesromanticos.info/wp-content/uploads/2019/07/suite-colonial-1024x683.jpg', 
    breakfast: true, 
    rating: 4.5 
  }, 
  { 
    id: 2, 
    name: 'Happy people Inn', 
    description: 'Luftkonditionering, Gratis kontinental frukost, Gratis reception, Gratis toalettartiklar, Trädgård, Vandrings-/cykelleder på plats, Ridning i närheten, Kajakpaddling i närheten, Bärbar arbetsplats, Tvättmöjligheter, Bagageförvaring, Flerspråkig personal, Rökfritt, Antal barer /lounger - 1, Antal utomhuspooler - 1, Antal poolbarer - 1, Antal restauranger - 1, Solstolar vid poolen, Poolparasoller, ', 
    price: '1800/natt', 
    image: 'https://araamdetours.com/wp-content/uploads/2023/08/family-friendly-getaways-fun-filled-destinations_1.jpg', 
    breakfast: true, 
    rating: 4.0 
  }, 
  {
    id: 3, 
    name: 'Andalucien Inn', 
    description: 'Detta familjevänliga hotell ligger i Nerjas strandområde. Det erbjuder en 24-timmarsreception, gratis Wi-Fi och luftkonditionerade rum med. ', 
    price: '1200 SEK/natt', 
    image: 'https://www.hotelscombined.com/rimg/himg/e0/f8/1a/leonardo-13892-159981887-841730.jpg?width=968&height=607&crop=true', 
    breakfast: true, 
    rating: 4.2, 
  },
  { 
    id: 4, 
    name: 'Sunrise Resort Hotel', 
    description: 'Sunrise Resort Hotel erbjuder ett perfekt semesterparadis för både barn och seniorer. Hotellet har en barnklubb med roliga aktiviteter, samt lugna och avkopplande områden för äldre. Här finns även en utomhuspool och en restaurang med specialanpassade menyalternativ för alla åldrar. Perfekt för familjesemestern!', 
    price: '1100 SEK/natt', 
    image: 'https://dimaak.com/blog/wp-content/uploads/2020/09/12.jpg.730x486_q85_box-0016001067_crop_detail.jpg', 
    breakfast: true, 
    rating: 4.2 
  }, 
  { 
    id: 5, 
    name: 'Madrid Villas & Spa', 
    description: 'Madrid Villas & Spa är en idyllisk tillflyktsort för både avkoppling och äventyr. Här kan du njuta av lyxiga spa-behandlingar och samtidigt utforska den livliga huvudstaden. Hotellet erbjuder eleganta villor med utsikt över havet och en restaurang som serverar delikata rätter anpassade för både unga och äldre gäster. Perfekt för en minnesvärd semester med familjen!', 
    price: '1400 SEK/natt', 
    image: 'http://seniortimes.ie/wp-content/uploads/2020/11/Sunset-Beach-Club-Sea-View-003.jpg', 
    breakfast: true, 
    rating: 4.7 
  },
];

function SpainList() {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({});

  const handleStarClick = (hotelId, rating) => {
    setRatings({ ...ratings, [hotelId]: rating + 1 });
  };

  const renderStars = (hotelId, rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa fa-star${i < rating ? '' : '-o'} star`}
          aria-hidden="true"
          style={{ cursor: 'pointer' }}
          onClick={() => handleStarClick(hotelId, i)}
        ></i>
      );
    }
    return (
      <div className="rating-container">
        {stars}
        <i className="fa fa-thumbs-o-up thumbs-up" aria-hidden="true"></i>
      </div>
    );
  };

  return (
    <>
      <SpainHeader />
      <div className="hotel-list">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            <div className="hotel-info">
              <div className="hotel-header">
                <Link to={`/hotel/${hotel.id}`} className="location-link">
                  <img src={mapIcon} alt="Map Icon" className="map-icon" />
                </Link>
                <h2>{hotel.name}</h2>
                {renderStars(hotel.id, ratings[hotel.id] || hotel.rating)}
              </div>
              <div className="hotel-description">
                {hotel.description.substring(0, 100)}...
                <Link to={`/hotel/${hotel.id}`}> Läs mer...</Link> {/* Link to detailed view */}
              </div>
            </div>
            <div className="hotel-extra">
              <p><strong>Pris från:</strong></p>
              <p><strong>{hotel.price}</strong></p>
              <p>Frukost ingår: {hotel.breakfast ? <img src={cupIcon} alt="Cup" style={{ width: '20px' }} /> : 'Nej'}</p>
              <Link to={`/hotel/${hotel.id}`} className="details-link">  {/* Updated link */}
                <button className="boka-button">Boka</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpainList;
