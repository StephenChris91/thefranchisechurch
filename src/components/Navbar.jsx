import { useRef, useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ color }) {
  const navRef = useRef();
  const location = useLocation();

  const openMobileNav = () => {
    navRef.current.classList.toggle('mobile-nav');
  };

  const closeMobileNav = () => {
    navRef.current.classList.remove('mobile-nav');
  };

  useEffect(() => {
    // Close mobile nav on route change
    closeMobileNav();
  }, [location.pathname]);

  return (
    <div id="header-wrapper">
      <header>
        <Link to="/">
          <img src="/assets/images/logo.png" alt="logo" />
        </Link>
        <nav className="nav" ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/livestream">Livestream</Link>
          <button className="">
            Join Us Online
            <FaYoutube className='icon'/>
          </button>
          <button className='mobile-close-btn nav-btn' onClick={closeMobileNav}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="mobile-open-btn nav-btn"
          onClick={openMobileNav}
        >
          <GiHamburgerMenu />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
