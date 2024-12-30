import React, { useState } from 'react';
import './ImageSlider.css';
import beach from '../assets/guestimage1.jpg'; // Importera gästbild 1
import bathroom1 from '../assets/bathroom-1.jpg'; // Importera badrumsbild 1
import rom2 from '../assets/rom2.jpg'; // Importera rumsbild 2
import room1 from '../assets/room-1.jpg'; // Importera rumsbild 1
import out1 from '../assets/out1.jpg'; // Importera utomhusbild 1

const images = [beach, bathroom1, rom2, room1, out1]; // Array med bilder

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Aktuellt bildindex
  const [modalImage, setModalImage] = useState(null); // Bild för modalen

  // Funktion för att visa nästa bild
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 4 ? 0 : prevIndex + 1
    );
  };

  // Funktion för att visa föregående bild
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
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
          <img src={modalImage} alt="Förstorad vy" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
