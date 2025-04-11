import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./coman/Product";
import Review from "./coman/Review";
import Instagram from "./coman/Instagram";
import Footer from "./coman/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Product />
        <Review />
        <Instagram />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
