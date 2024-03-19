/* eslint-disable no-unused-vars */
import React from 'react'
import 
{ BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { AiFillSchedule } from "react-icons/ai";
 import { GoHome } from "react-icons/go";
 import { FaRegUser } from "react-icons/fa";
 import { IoMdAdd } from "react-icons/io";





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
                <a href="/dashboard">
                    <GoHome className='icon'/> Home
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaRegUser className='icon'/> Admin
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="">
                    <IoMdAdd className='icon'/> Add Routine
                </a>
            </li>
           
           
        </ul>
    </aside>
  )
}

export default Sidebar;