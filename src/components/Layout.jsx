import { useState, useEffect } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer";
import Spinner from "./Loader";
// import MobileNavbar from "./mobile-nav"


function Layout( { children } ) {

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
    return (
      <>
      {loading ? <Spinner /> : (
        <div className="main-wrapper">
          <Navbar isOpen={isOpen}/>
          {children}
          <Footer />
        </div>
      )}
        
      </>
    )
  }
  
  export default Layout
  