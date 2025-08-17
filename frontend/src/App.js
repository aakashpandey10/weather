import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Forecast from "./Pages/Forecast";
import Weather from "./Pages/Weather";  // Weather page import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast/:city" element={<Forecast />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/weather" element={<Weather />} />   {/* ✅ Weather page route */}
      </Routes>
    </Router>
  );
}

export default App;
