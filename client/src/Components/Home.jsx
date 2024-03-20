/* eslint-disable no-unused-vars */
import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";


function Home() {
  return (
    <main className="main-container">
      <div className="admin-title">Welcome, Admin</div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Current Classes</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <Link to="/todays-classes">Todays Classes</Link>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <Link to="/upcoming-classes">Upcoming classes</Link>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
         
        </div>
       
      
        <div className="card">
          <div className="card-inner">
            <Link to="/leisure-classes">Leisure Classes</Link>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
        </div>
       
      </div>
      
     
    </main>
    
    
  );
}

export default Home;
