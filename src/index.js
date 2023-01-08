import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Products,
  LowToHigh,
  HighToLow,
  Contact,
} from "./components";
// Renders our components to take you to that specific page. 
ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/lowTohigh" element={<LowToHigh />} />
      <Route path="/products/highTolow" element={<HighToLow />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

