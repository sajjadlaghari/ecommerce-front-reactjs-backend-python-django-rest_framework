// src/App.js
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import ProductDetailed from './pages/Product-detailed';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detailed" element={<ProductDetailed />} />
      
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
