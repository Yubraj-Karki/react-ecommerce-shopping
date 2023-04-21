import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, ToastNotification } from "./components/index";
// import { Home, Products } from "./pages/index";
import { ShoppingBag } from "./containers/index";

const Home = lazy(() =>
  import("./pages/index").then((module) => ({ default: module.Home }))
);
const Products = lazy(() =>
  import("./pages/index").then((module) => ({ default: module.Products }))
);

const SingleProduct = lazy(() =>
  import("./components/index").then((module) => ({
    default: module.SingleProduct,
  }))
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ShoppingBag />
        <ToastNotification />
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:slug" element={<SingleProduct />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
