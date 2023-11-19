import { useRef } from 'react'

import { FaYoutube } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom"




function Navbar() {

  const navRef = useRef();

  const openMobileNav = () => {
    navRef.current.classList.toggle('mobile-nav')
    // console.log(navRef)
  }

    return (
      <div id="header-wrapper">
      <header>
            <Link to='/'>
                <img src="/assets/images/logo.png" alt="logo" />
            </Link>
            <nav className="nav" ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                {/* <Link to='/event'>Events</Link> */}
                <Link to='/livestream'>Livestream</Link>
                <button className="btn-primary">
                    Join Us Online
                    <FaYoutube className='icon'/>
                </button>
                <button  className='mobile-close-btn nav-btn' onClick={openMobileNav}>
                    <FaTimes/>
                </button>
              </nav>
            <button 
              className="mobile-open-btn nav-btn" 
              onClick={() => openMobileNav()}>
                <GiHamburgerMenu />
            </button>
      </header>
      </div>
    )
  }
  
  export default Navbar
  