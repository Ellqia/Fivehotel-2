import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children, bannerImage, title }) => {
  return (
    <div className="layout">
      <Navigation />
      <header className="header">
        <img src={bannerImage} alt={title} className="banner-image" />
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
