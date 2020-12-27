import React from "react";
import { FaBars } from "react-icons/fa";
import "./index.css";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar-container">
        <div className="mobile-icon">
          <FaBars />
        </div>
        <div className="nav-menu">
          <div className="nav-item">About</div>
          <div className="nav-item">Work</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
