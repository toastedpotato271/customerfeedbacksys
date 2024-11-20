import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;