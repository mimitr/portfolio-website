import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";

import { NavLinks } from "./NavbarElements";
import Sidebar from "../Sidebar";

const Navbar = (props) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const handleSidebarOpen = () => {
  //   setSidebarOpen(true);
  // };
  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="nav-menu">
          <div className="nav-item">
            <NavLinks to="about">About</NavLinks>
          </div>
          <div className="nav-item">
            <NavLinks to="work">Work</NavLinks>
          </div>
          <div className="nav-item">
            <NavLinks to="contact">Contact</NavLinks>
          </div>
        </div>
        <div className="mobile-icon" onClick={props.handleSidebarOpen}>
          <FaBars />
        </div>
        {props.sidebarOpen ? (
          <Sidebar handleSidebarOpen={props.handleSidebarOpen} />
        ) : null}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
