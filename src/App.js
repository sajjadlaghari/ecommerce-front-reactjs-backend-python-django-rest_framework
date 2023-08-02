// src/App.js
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";

import ProductDetailed from "./pages/Product-detailed";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detailed/:id" element={<ProductDetailed />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
