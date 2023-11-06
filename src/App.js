import React from 'react';
import Home from "./pages/Home.js";
import Wedding from "./pages/Wedding.js";
import { AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App" id="app">

      <div className="navMenu" id="navmenu">
        <div className="navOptions" id="navoptions">
          <Link to="/" className={"navOption" + (location.pathname === "/" ? " selected" : "")}>
            <p className="navOptionText">HOME</p>
          </Link>
          <Link to="/wedding" className={"navOption" + (location.pathname === "/wedding" ? " selected" : "")}>
            <p className="navOptionText">WEDDING</p>
          </Link>
          <Link to="/wedding" className={"navOption" + (location.pathname === "/ourstory" ? " selected" : "")}>
            <p className="navOptionText story">OUR STORY</p>
          </Link>
          <Link to="/wedding" className={"navOption" + (location.pathname === "/travel" ? " selected" : "")}>
            <p className="navOptionText">TRAVEL</p>
          </Link>
          <Link to="/wedding" className={"navOption" + (location.pathname === "/gifts" ? " selected" : "")}>
            <p className="navOptionText">GIFTS</p>
          </Link>
        </div>
        <div className="menuButton" onClick={e => openMenu()}>
          <p className="menuButtonText">MENU</p>
        </div>
      </div>
      
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

function openMenu() {
  document.getElementById("navmenu").classList.toggle("show");
}