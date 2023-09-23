import { FaYoutube } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom"
function Navbar() {

    return (
      <section id="header-wrapper">
        <div className='nav-container'>
            <Link to='/'>
                <img src="/assets/images/logo.png" alt="logo" />
            </Link>
            <div className="menu-container">
              <nav className="nav">
                  <Link to='/'>Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/event'>Events</Link>
                  <Link to='/livestream'>Livestream</Link>
              </nav>
              <button className="btn-primary">
                Join Us Online
                <span>
                  <FaYoutube className='icon'/>
                </span>
              </button>
              <GiHamburgerMenu className="hamburger"/>
            </div>
        </div>
      </section>
    )
  }
  
  export default Navbar
  