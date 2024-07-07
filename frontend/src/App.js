import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/dashboard";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
    <Routes>
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
