import React from 'react';
import Home from "./pages/Home.js";
import Wedding from "./pages/Wedding.js";
import { AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App" id="app">
      <div className="navigationButton">
        <Link to="/wedding" className="weddingButton">
          <p className="projectButtonText">MENU</p>
        </Link>
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