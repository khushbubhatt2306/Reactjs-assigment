import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Navigation-bar/Pages/Home";
import About from "./Navigation-bar/Pages/About";
import Contact from "./Navigation-bar/Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <>
        {/* <h1 class="text-3xl font-bold text-center">Welcome to React Route</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
