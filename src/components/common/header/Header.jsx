import React from "react";
import { Navbar } from "../../common";

import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top__logo">
          <a href="/" className="header-logo">SIMBIRSOFT</a>
        </div>
        <div className="header-top__navbar">
          <div className="header-top__navigation">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );

}

export default Header;
