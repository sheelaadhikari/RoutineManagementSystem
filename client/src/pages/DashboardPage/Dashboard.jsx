/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import Home from "../../Components/Home/Home";

const Dashboard = () => {


 

  return (
   <div className="w-screen ">
    <div className="header border border-custom-blue-600 mb-2">
    <Header/>
    </div>
     <div className='flex'>  
     <div className="sidebar">
     <Sidebar />
     </div>
     <div className="home mx-3 w-full" 
     >
     <Home />   
     </div>
     </div>


     
   </div>
  )
}
//   

export default Dashboard;
