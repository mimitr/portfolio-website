import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Home />
      </Router>
    </React.Fragment>
  );
}

export default App;
