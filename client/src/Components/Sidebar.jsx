/* eslint-disable no-unused-vars */
import React from 'react'

 import { AiFillSchedule } from "react-icons/ai";
 import { GoHome } from "react-icons/go";
 import { FaRegUser } from "react-icons/fa";
 import { IoMdAdd } from "react-icons/io";
import { Link } from 'react-router-dom';





// eslint-disable-next-line react/prop-types
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <AiFillSchedule  className='icon_header'/> Routine
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
               
                    <GoHome/> 
                    <Link to='/home'>Home</Link>

               
            </li>
            <li className='sidebar-list-item'>
               
                    <FaRegUser/> 
                    <Link to='/admin'>Admin</Link>

                
            </li>
            
            <li className='sidebar-list-item'>
              
                 
                    <IoMdAdd />
                    <Link to='/crud-bcaf'>Add Routine</Link>

                
               
            </li>
           
           
        </ul>
    </aside>
  )
}

export default Sidebar;