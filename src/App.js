// src/App.js
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Home from './pages/Category';

import ProductDetailed from './pages/Product-detailed';
import Category from './pages/Category';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detailed" element={<ProductDetailed />} />
          <Route path="/categories" element={<Category />} />
      
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
