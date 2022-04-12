import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../images/menu-icon.svg";
import { ReactComponent as MenuIcon } from "../images/menu-icon.svg";
import { ReactComponent as Logo } from "../images/YourLogo.svg";
import smallArrow from '../images/smallArrow.png';
import "./Nav.css";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
 
    <div className="header">
      <div className="container">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="#">
            <Logo className="logo" />
          </a>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">Explore</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">About us</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#"> Cities 
            <img src= {smallArrow} width="18" height="12"/> 
</a>
            <ul class="nav-dropdown">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Graphic Design</a>
            </li>
          </ul>
          </li>
          <li className="option " onClick={closeMobileMenu}>
            <a href="#">Call</a>
          </li>
          
        </ul>
      </div>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
    </div>
  );
};

export default Nav;