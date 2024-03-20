/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Home from "../Components/Home";
import '../../src/dashboard.css';

const Dashboard = () => {


 

  return (
   <div>
     <div className='grid-container'>
       
       
       <Sidebar />
       <Home />
      
     </div>


     
   </div>
  )
}
//   

export default Dashboard;
