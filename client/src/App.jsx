/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;