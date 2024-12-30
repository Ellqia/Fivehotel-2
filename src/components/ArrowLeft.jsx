import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArrowLeft = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <img src={require('./assets/arrow-to-left.png')} alt="Arrow Left" className="arrow-icon arrow-left-up" onClick={goBack} />
  );
};

export default ArrowLeft;
