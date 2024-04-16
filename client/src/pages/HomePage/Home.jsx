/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header/Header";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { readDepartment } from "../../store/slice/DepartmentSlice";
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {



  return (
   <div className="w-screen ">
    <div className="header border border-custom-blue-600 mb-2">
    <Header/>
    </div>
     <div className='flex'>  
     {/* <div className="sidebar">
     <Sidebar />
     </div> */}
     <div className="home mx-3 w-full" 
     >
     <Dashboard/>
     </div>
     </div>

    

     
   </div>
  )
}
//   

export default Home;
