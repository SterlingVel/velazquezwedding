import React from 'react';
import Home from "./pages/Home.js"
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App" id="app">
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;