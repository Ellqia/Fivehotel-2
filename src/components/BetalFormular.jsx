import React from 'react';
import './BetalFormular.css';
import Strap from './Strap.jsx';
import './BetalButton.css';
import { useNavigate } from 'react-router-dom';
import bannerPic from '../assets/Betal-banner.jpg';

import BetalaButton from './BetalaButton';

const BetalFormular = () => {
  const [selectedPayment, setSelectedPayment] = React.useState('');

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/bokning');
  };

  const handleGoToConfirmation = () => {
    navigate('/bekraftelse');
  };

  return (
    <div className="betalformular-page">
      <img src={bannerPic} alt="Banner" className="betalformular-banner-img" />
      <Strap text="Betalningalternativ" className="betalformular-strap" />
      <div className="betalformular-form-container">
        <small className="betalformular-small-text">Fyll i bankuppgifter</small> {/* Small text added here */}
        <div className="betalformular-booking-details">
          <form className="betalformular-user-details-form">
            <label className="betalformular-form-label">
              <div className="betalformular-input-with-radio">
                <input
                  type="radio"
                  name="payment"
                  value="creditcard"
                  checked={selectedPayment === 'creditcard'}
                  onChange={() => setSelectedPayment('creditcard')}
                  className="betalformular-radio-button"
                />
                <input
                  type="text"
                  className="betalformular-input-field"
                  placeholder="Kredit- och betalkort"
                />
              </div>
            </label>
            <label className="betalformular-form-label">
              <div className="betalformular-input-with-radio">
                <input
                  type="radio"
                  name="payment"
                  value="internetbank"
                  checked={selectedPayment === 'internetbank'}
                  onChange={() => setSelectedPayment('internetbank')}
                  className="betalformular-radio-button"
                />
                <input
                  type="text"
                  className="betalformular-input-field"
                  placeholder="Internetbank"
                />
              </div>
            </label>
            <label className="betalformular-form-label">
              <div className="betalformular-input-with-radio">
                <input
                  type="radio"
                  name="payment"
                  value="klarna"
                  checked={selectedPayment === 'klarna'}
                  onChange={() => setSelectedPayment('klarna')}
                  className="betalformular-radio-button"
                />
                <input
                  type="text"
                  className="betalformular-input-field"
                  placeholder="Klarna"
                />
              </div>
            </label>
            <label className="betalformular-form-label">
              <div className="betalformular-input-with-radio">
                <input
                  type="radio"
                  name="payment"
                  value="faktura"
                  checked={selectedPayment === 'faktura'}
                  onChange={() => setSelectedPayment('faktura')}
                  className="betalformular-radio-button"
                />
                <input
                  type="text"
                  className="betalformular-input-field"
                  placeholder="Faktura"
                />
              </div>
            </label>
            <label className="betalformular-form-label">
              <div className="betalformular-input-with-radio">
                <input
                  type="radio"
                  name="payment"
                  value="giftcard"
                  checked={selectedPayment === 'giftcard'}
                  onChange={() => setSelectedPayment('giftcard')}
                  className="betalformular-radio-button"
                />
                <input
                  type="text"
                  className="betalformular-input-field"
                  placeholder="Presentkort / Resekrediter"
                />
              </div>
            </label>
            <p className="betalformular-villkor">Genom att klicka på "Betala köp" godkänner jag villkoren hos ResMer.</p>
          </form>
        </div>
        <div className="betalformular-button-container">
          <button className="betalformular-shared-button" onClick={handleGoBack}>Tillbaka</button>
          <button className="betalformular-shared-button" onClick={handleGoToConfirmation}>Betala Köp</button>
        </div>
      </div>
    </div>
  );
};

export default BetalFormular;
