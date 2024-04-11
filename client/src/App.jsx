/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import UpcomingClasses from "./Components/UpcomingClasses/UpcomingClasses";
import TodaysClasses from "./Components/TodaysClasses/TodaysClasses";
import Bca from './pages/DepartmentPage/BCAPage/Bca'
import Bbm from "./pages/DepartmentPage/BBMPage/Bbm";
import Bbs from "./pages/DepartmentPage/BBSPage/Bbs";
import All from "./pages/DepartmentPage/AllPage/All";
import Home from "./pages/HomePage/Home";
import Logout from "./Components/Logout/Logout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>} />
        <Route path="/upcoming-classes" element={<UpcomingClasses />} />
        <Route path="/todays-classes" element={<TodaysClasses />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bca" element={<Bca />} />
        <Route path="/bbm" element={<Bbm />} />
        <Route path="/bbs" element={<Bbs />} />
        <Route path="/all" element={<All />} />
        <Route path="/logout" element={<Logout />} />




      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;