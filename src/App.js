// src/App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Home from "./pages/Home";

import ProductDetailed from "./pages/Product-detailed";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <div>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-detailed/:id" element={<ProductDetailed />} />
          <Route path="/categories" element={<Category />} />
          <Route
            path="/login"
            element={
              <Login
                isLoggedIn={isLoggedIn}
                onLogin={handleLogin}
                onLogout={handleLogout}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
