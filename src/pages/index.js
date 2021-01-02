import React, { useState } from "react";
import Navbar from "../components/Navbar";

import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <React.Fragment>
      <Navbar handleSidebarOpen={handleSidebarOpen} sidebarOpen={sidebarOpen} />
      {/* about me
      works
      contact
      footer */}
    </React.Fragment>
  );
};

export default Home;
