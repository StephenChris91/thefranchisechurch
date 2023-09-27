// src/components/Header.js
import React from 'react';
// import './Header.scss';

const Header = () => {
  return (
    <header className="video-header">
      <video autoPlay loop>
        <source src="assets/declare.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        {/* Add your header content here */}
        <h1>Your Website Header</h1>
        <p>Welcome to your website.</p>
      </div>
    </header>
  );
};

export default Header;
