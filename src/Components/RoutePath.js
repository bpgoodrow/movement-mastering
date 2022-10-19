import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Faq from "./Faq";
import PortfolioControl from "./PortfolioControl";
import Login from "./Login";
import NewPortfolioForm from "./NewPortfolioForm";

const RoutePath = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element={<PortfolioControl />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newportfolioform" element={<NewPortfolioForm />} />
    </Routes>
  );
}

export default RoutePath;