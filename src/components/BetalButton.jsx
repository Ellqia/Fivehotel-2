import React from 'react';
import BetalButton from './BetalButton';

const BetalButton = ({ onClick }) => {
  return (
    <button className="betal-button" onClick={onClick}>
      Betala
    </button>
  );
};

export default BetalButton;
