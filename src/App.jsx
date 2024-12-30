import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Start from './components/Start';
import SpainList from './components/SpainList';
import ChosenHotel from './components/ChosenHotel';
import Hotelfact from './components/Hotelfact';
import BookingForm from './components/BookingForm';
import SpainDetail from './components/SpainDetail';
import BokningCard from './components/BokningCard';
import BetalFormular from './components/BetalFormular';
import Bekraftelse from './components/Bekraftelse';

import ArrowUpImg from './assets/arrow-up.png'; // Corrected path
import ArrowLeftImg from './assets/arrow-to-left.png'; // Corrected path

import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/hotels/spain" element={<SpainList />} />
          <Route path="/chosenhotel/:id" element={<ChosenHotel />} />
          <Route path="/hotel/:id" element={<Hotelfact />} />
          <Route path="/hotel/:id" element={<SpainDetail />} />
          <Route path="/bokning" element={<BokningCard />} />
          <Route path="/betalning-formular" element={<BetalFormular />} />
          <Route path="/bekraftelse" element={<Bekraftelse />} />
          <Route path="/booking-form" element={<BookingForm />} />
        </Routes>
        <Footer />
        <img src={ArrowUpImg} alt="Arrow Up" className="arrow-icon arrow-up" onClick={scrollToTop} />
        <img src={ArrowLeftImg} alt="Arrow Left" className="arrow-icon arrow-left-up" onClick={goBack} />
      </div>
    </Router>
  );
}

export default App;
