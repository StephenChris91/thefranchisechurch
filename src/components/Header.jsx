// src/components/Header.js
import React from 'react';
// import './Header.scss';
import { FaYoutube } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="video-header">
      <video autoPlay muted loop>
        <source src="assets/opener.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="header-content">

        {/* <h1>THIS IS HOME</h1> */}
        {/* <button class="button-primary">
          Join Us Today
         <FaYoutube className='icon' />
        </button> */}
      </div>
    </header>
  );
};

export default Header;
