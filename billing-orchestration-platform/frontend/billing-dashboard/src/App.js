import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BillingSummary from "./components/BillingSummary";
import ServiceBreakdown from "./components/ServiceBreakdown";
import AlertConfig from "./components/AlertConfig";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<BillingSummary />} />
      <Route path="/service-breakdown" element={<ServiceBreakdown />} />
      <Route path="/alert-config" element={<AlertConfig />} />
    </Routes>
  </Router>
);

export default App;
