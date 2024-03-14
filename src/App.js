import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CryptoDetails from "./components/CryptoDetails";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchange from "./components/Exchange";
import News from "./components/News";
import Homepage from "./components/Homepage";

import './App.css';

function App() {
   

  return (
    <div className="app">
      <div className="header">
        <Navbar />
      </div>
      <div className="main">
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/cryptodetails" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <div className="footer" style={{position:'fixed', bottom: '0',}}>
          <p style={{ color: 'black', textAlign: 'center' }} >
            CryptoPhile <br />
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
