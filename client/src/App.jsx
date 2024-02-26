/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;