/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import UpcomingClasses from "./Components/UpcomingClasses";
import TodaysClasses from "./Components/TodaysClasses";
import Dashboard from "./pages/DashPage/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upcoming-classes" element={<UpcomingClasses />} />
        <Route path="/todays-classes" element={<TodaysClasses />} />


        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;