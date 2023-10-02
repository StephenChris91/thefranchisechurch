import { useState } from "react"

import Navbar from "./Navbar"
import Footer from "./Footer";
// import MobileNavbar from "./mobile-nav"


function Layout( { children } ) {

  const [isOpen, setIsOpen] = useState(false);


    return (
      <>
        <Navbar isOpen={isOpen}/>
        {children}
        <Footer />
      </>
    )
  }
  
  export default Layout
  