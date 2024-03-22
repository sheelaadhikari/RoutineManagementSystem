/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Space, Button, Tooltip } from 'antd';
import "./Home.css";
import TodaysClasses from "../TodaysClasses";
import UpcomingClasses from "../UpcomingClasses";
import CurrentClasses from "../CurrentClasses";

function Home() {
  const [search, setSearch] = useState('');
  // console.log(search);
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
      <div className="up flex justify-center items-center p-6">
        <div className="search">
          <div className="search flex border border-gray-500 rounded-lg">
            <div className="input ">
              <input type="text" name='ser' onChange={(e) => setSearch(e.target.value)} placeholder="Search Tasks..." className="text-black p-2 rounded-lg placeholder-gray-500" />
            </div>
            <div className="search border-gray-500 border-l p-2">
              <SearchOutlined />
            </div>
          </div>
        </div>
      </div>

       
      <div className="class">
<div className="buttonclass border-t border-gray-400 flex p-8 space-x-8">
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


      <div className="body h-[15rem] mx-6">
        <div className="box font-semibold text-xl border border-black h-full flex justify-center items-center">
        {classes}
        </div>
      </div>
</div>
     

    </div>



  );
}

export default Home;
