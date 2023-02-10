import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, SingleProduct, ToastNotification } from "./components/index";
import { Home, Products } from "./pages/index";
import { ShoppingBag } from "./containers/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ShoppingBag />
        <ToastNotification />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
