/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header/Header";
import Dashboard from "../../Components/Dashboard/Dashboard";
import { readDepartment } from "../../store/slice/DepartmentSlice";
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

const dispatch=useDispatch();
const {department,loading}=useSelector((state)=>state.departmentapp);

useEffect(()=>{
    dispatch(readDepartment());
    console.log('department',department.singleroutine);
},[]);

if(loading){
  return <p>Loading...</p>
}



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

     {department.singleroutine && department.singleroutine.periods.map((item, index) => (
  <p key={index}>{item.subject}</p>
))}

     
   </div>
  )
}
//   

export default Home;
