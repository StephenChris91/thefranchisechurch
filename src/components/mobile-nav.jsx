import { FaYoutube } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom"
function MobileNavbar() {

    return (
      <section id="mobile-header-wrapper">
        <div className='mobile-nav-container'>
          <div className=''></div>
            <Link to='/'>
                <img src="/assets/images/logo.png" alt="logo" />
            </Link>
            <div className="mobile-menu-container">
              <nav className="mobile-nav">
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/event'>Events</Link>
                  <Link to='/livestream'>Livestream</Link>
              </nav>
              <button className="mobile-btn-primary">
                Join Us Online
                <span>
                  <FaYoutube className='mobile-icon'/>
                </span>
              </button>
              <GiHamburgerMenu className="mobile-hamburger"/>
            </div>
        </div>
      </section>
    )
  }
  
  export default MobileNavbar
  