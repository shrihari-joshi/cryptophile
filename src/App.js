import React from "react";
import { Router, Routes, Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from "antd"

import { Navbar, Cryptocurrencies, CryptoDetails, Exchange, New, Homepage, News } from './components'
import './App.css'

function App() {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Router>
                      <Routes>
                        <Route path="/">
                          <Homepage/>
                        </Route>
                        
                        <Route path="/exchange">
                          <Exchange/>
                        </Route>

                        <Route path="/cryptocurrencies">
                          <Cryptocurrencies/>
                        </Route>

                        <Route path="/crypto/:coinId">
                          <CryptoDetails/>
                        </Route>

                        <Route path="/news">
                          <News/>
                        </Route>

                        </Routes>
                    </Router>
                </div>
            </Layout>
        </div>
        <div className="footer"> 

        </div>
    </div>
  );
}

export default App;
