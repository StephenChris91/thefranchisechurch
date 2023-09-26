import { useState } from "react"

import Navbar from "./Navbar"
import MobileNavbar from "./mobile-nav"


function Layout( { children } ) {

  const [isOpen, setIsOpen] = useState(false);


    return (
      <>
        <Navbar isOpen={isOpen}/>
        {/* <MobileNavbar/> */}
        {children}
      </>
    )
  }
  
  export default Layout
  