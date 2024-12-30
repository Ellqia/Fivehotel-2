import React from 'react';

const ArrowUp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img src={require('./assets/arrow-up.png')} alt="Arrow Up" className="arrow-icon arrow-up" onClick={scrollToTop} />
  );
};

export default ArrowUp;
