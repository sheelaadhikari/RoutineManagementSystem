/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space, Button, Tooltip } from 'antd';
import "./Home.css";
import TodaysClasses from "../TodaysClasses/TodaysClasses";
import UpcomingClasses from "../UpcomingClasses/UpcomingClasses";
import CurrentClasses from "../CurrentClasses/CurrentClasses";

function Home() {

  const[classes,setClasses]=useState(<CurrentClasses/>);

  const handleCurrentClass=()=>{
    setClasses(<CurrentClasses/>); 
  }

  const handleTodayClass=()=>{
    setClasses(<TodaysClasses/>); 
  }

  const handleUpcomingClass=()=>{
    setClasses(<UpcomingClasses/>) ;  
  }

  return (
    <div>

       
      <div className="class">
<div className="buttonclass flex p-8 space-x-8">
        <div className="current">
          <Button onClick={handleCurrentClass} className="btn border-gray-400 font-semibold" size='large'>Current</Button>
        </div>
        <div className="today">
          <Button onClick={handleTodayClass} className="btn border-gray-400 font-semibold" size='large'>Today</Button>
        </div>
        <div className="upcom">
          <Button onClick={handleUpcomingClass} className="btn border-gray-400 font-semibold" size='large'>Upcoming</Button>
        </div>
      </div>


      <div className="body h-[25rem] mx-6">
        <div className="box font-semibold text-xl border border-black h-full flex justify-center items-center">
        {classes}
        </div>
      </div>
</div>
     

    </div>



  );
}

export default Home;
