/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from "react";
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
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { useAuth } from "./context/auths";

const App = () => {
  const [auth]=useAuth();

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>

        <Route path="/user" element={<PrivateRoute/>}>
          <Route path="home" element={<Home/>} />
          <Route path="upcoming-classes" element={<UpcomingClasses/>} />
          <Route path="todays-classes" element={<TodaysClasses/>} />
          <Route path="bbm" element={<Bbm/>} />
          <Route path="bca" element={<Bca/>} />
          <Route path="bbs" element={<Bbs/>} />
          <Route path="all" element={<All/>} />
          <Route path="logout" element={<Logout/>} />
    </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
