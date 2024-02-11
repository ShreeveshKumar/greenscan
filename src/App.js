import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import Shop from "./pages/Shop/Shop";
import Sell from './pages/Sell/Sell'
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
};

const PageRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Community" element={<Community />} />
      <Route exact path="/Shop" element={<Shop />} />
      <Route exact path="/Shop/Sell" element={<Sell />} />
      <Route exact path="/Products" element = {<Products />} />


    </Routes>
  );
};

export default App;
