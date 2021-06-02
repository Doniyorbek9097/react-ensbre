import React from "react";
import Logo from "./components/logo";
import Navbar from "./components/navbar";

function Header(){
  return(
    <header>
    <Logo logo = "Portfoilo"/>
    <Navbar/>
    </header>
  )
}

export default Header;