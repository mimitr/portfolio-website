import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { SidebarLink } from "./SidebarElements";

import "./index.css";

const Sidebar = (props) => {
  return (
    <React.Fragment>
      <div className="sidebar-container" onClick={props.handleSidebarOpen}>
        <div className="sidebar-icon" onClick={props.handleSidebarOpen}>
          <FaTimes />
        </div>
        <div className="sidebar-wrapper">
          <div className="sidebar-menu">
            <SidebarLink to="about" onClick={props.handleSidebarOpen}>
              About{" "}
            </SidebarLink>
            <SidebarLink to="work" onClick={props.handleSidebarOpen}>
              Work
            </SidebarLink>
            <SidebarLink to="contact" onClick={props.handleSidebarOpen}>
              Contact
            </SidebarLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
