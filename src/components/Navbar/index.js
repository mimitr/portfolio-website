import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";

import { NavLinks } from "./NavbarElements";
import Sidebar from "../Sidebar";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../images/logo.png"

const Navbar = (props) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="navbar-wrapper">
          <div className="logo" to="/" onClick={toggleHome}>
            <img className="logo-img" src={logo}/>
          </div>
          <div className="nav-menu">
            <div className="nav-item">
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                activeClass="active"
              >
                About
              </NavLinks>
            </div>
            <div className="nav-item">
              <NavLinks
                to="work"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                activeClass="active"
              >
                Work
              </NavLinks>
            </div>
            <div className="nav-item">
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                activeClass="active"
              >
                Contact
              </NavLinks>
            </div>
          </div>
          <div className="mobile-icon" onClick={props.handleSidebarOpen}>
            <FaBars />
          </div>
          {props.sidebarOpen ? (
            <Sidebar handleSidebarOpen={props.handleSidebarOpen} />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
