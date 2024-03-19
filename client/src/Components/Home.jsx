/* eslint-disable no-unused-vars */
import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    

  return (
    <main className='main-container'>
        <div className='admin-title'>
           Welcome, Admin
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Current Classes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Upcoming Classes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Todays classes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Leisure Classes</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                
            </div>
           
        </div>

       
    </main>
  )
}

export default Home