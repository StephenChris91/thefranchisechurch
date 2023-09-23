
import { Link } from "react-router-dom"
function Navbar() {

    return (
      <section id="header-wrapper">
        <div className='nav-container'>
            <Link to='/'>
                <img src="/assets/images/logo.png" alt="logo" />
            </Link>
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/event'>Events</Link>
                <Link to='/livestream'>Livestream</Link>
            </nav>
        </div>
      </section>
    )
  }
  
  export default Navbar
  