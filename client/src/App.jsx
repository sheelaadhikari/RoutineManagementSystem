/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import UpcomingClasses from "./Components/UpcomingClasses/UpcomingClasses";
import TodaysClasses from "./Components/TodaysClasses/TodaysClasses";
import Dashboard from "./pages/DashPage/Dashboard";
// import Bca from './pages/DepartmentPage/BCAPage/Bca'
// import Bbm from "./pages/DepartmentPage/BBMPage/Bbm";
// import Bbs from "./pages/DepartmentPage/BBSPage/Bbs";
// import All from "./pages/DepartmentPage/AllPage/All";
import Admindashboard from "./pages/admindashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AcceptInvitation from "./pages/AcceptInvitation";
const App = () => {
  return (
    <div>
  <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/Admindashboard" element={<Admindashboard/>} />
        <Route path="/accept-invitation" element={<AcceptInvitation/>} />


        <Route path="/upcoming-classes" element={<UpcomingClasses />} />
        <Route path="/todays-classes" element={<TodaysClasses />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/bca" element={<Bca />} />
        <Route path="/bbm" element={<Bbm />} />
        <Route path="/bbs" element={<Bbs />} />
        <Route path="/all" element={<All />} /> */}



      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;