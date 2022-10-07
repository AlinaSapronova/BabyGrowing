// import React, { useState } from "react"
import Home from "./Home"
import Baby from "./Baby"

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";

import './App.css';
import Shop from "./Shop";
import Toddler from "./Toddler";
import Kids from "./Kids";

// import { data } from "./data";

function App() {

  return (
    <Router>
<nav>
  <Link to="/" className="navbar">Home</Link>
  <Link to="/shop" className="navbar">Shop</Link>
  <Link to="" className="navbar">About us</Link>
  <Link to="" className="navbar">Contact</Link>
</nav>

      <Routes>
        <Route path="shop/baby" element={<Baby />}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="shop/toddler" element={<Toddler/>}></Route>
        <Route path="shop/kids" element={<Kids/>}></Route>
      </Routes>
    </Router>
 
  );
}

export default App;
