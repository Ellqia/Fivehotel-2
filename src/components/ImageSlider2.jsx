import React, { useState } from 'react';
import './ImageSlider.css';
import beach from '../assets/guestimage1.jpg';
import bathroom1 from '../assets/guestimage2.jpg';
import rom2 from '../assets/guestimage3.jpg';
import room1 from '../assets/guestimage4.jpg';
import out1 from '../assets/guestimage5.jpg'; // Ta bort duplicerad import
// import out1 from '../assets/guestimage6.jpg'; // Kommentera eller ta bort denna rad

const ImageSlider2 = () => {
  const images = [beach, bathroom1, rom2, room1, out1]; // Bildarray

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);

  // Funktion för att visa nästa bild
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Justera indexet korrekt
    );
  };

  // Funktion för att visa föregående bild
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Justera indexet korrekt
    );
  };

  // Öppna modalen för att visa en förstörd bild
  const openModal = (image) => {
    setModalImage(image);
  };

  // Stäng modalen
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage} className="prev-arrow">←</button>
      <div className="image-container">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="slider-image"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <button onClick={nextImage} className="next-arrow">→</button>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close-modal">&times;</span>
          <img src={modalImage} alt="Enlarged view" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageSlider2;
