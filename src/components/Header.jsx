// src/components/Header.js
import React from 'react';
// import './Header.scss';
import { FaYoutube } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="video-header">
      <video autoPlay mute loop>
        <source src="assets/declare.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">
        {/* Add your header content here */}
        {/* <h1>The Franchise Lagos</h1>
        <p>Welcome to Church</p>
        <button class="button-primary">
          Join Us Today
         <FaYoutube className='icon' />
        </button> */}
      </div>
    </header>
  );
};

export default Header;
