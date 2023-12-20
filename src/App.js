import React from 'react';
import Home from "./pages/Home.js";
import Wedding from "./pages/Wedding.js";
import Story from "./pages/Story.js";
import Travel from "./pages/Travel.js";
import Gifts from "./pages/Gifts.js";
import { AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from "react-router-dom";
import MenuLink from "./tools/menuLink.js"

function App() {

  const location = useLocation();

  return (
    <div className="App" id="app">

      <div className="navMenu" id="navmenu">
        <div className="navOptions" id="navoptions">
          <MenuLink link="" text="HOME"/>
          <MenuLink link="wedding" text="WEDDING"/>
          <MenuLink link="story" text="OUR STORY"/>
          <MenuLink link="travel" text="TRAVEL"/>
          <MenuLink link="gifts" text="GIFTS"/>
          <MenuLink link="#rsvpform" text="RSVP" rsvp={true}/>
          <MenuLink link="gifts" text="FAQ"/>
        </div>
        <div className="menuButton" onClick={e => openMenu()}>
          <p className="menuButtonText">MENU</p>
        </div>
      </div>
      
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/story" element={<Story />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/gifts" element={<Gifts />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

export function openMenu(rsvp) {
  document.getElementById("navmenu").classList.toggle("show");
}
