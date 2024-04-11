/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UpcomingClasses = () => {
    const [routine, setRoutine] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const res = await axios.get(
              "http://localhost:8001/api/v1/bca/get-bcafroutine"
            );
            setRoutine(res.data);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      return (
       <div className="div ">
         <div className='table-one'>
          <h2>{loading ? "Loading..." : "All Routines"}</h2>
          <table border="1">
            <thead>
              <tr>
                
                <th>programname</th>
                <th>semester</th>
                <th>day</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Subject</th>
                <th>Teacher</th>
              </tr>
            </thead>
            <tbody>
              {routine.map((item) => (
                item.periods.map((period) => (
                  <tr key={period._id}>
                  
                    <td>{item.programname}</td>
                    <td>{item.semester}</td>
                    <td>{item.day}</td>
                    <td>{new Date(period.startTime).toLocaleTimeString()}</td>
                    <td>{new Date(period.endTime).toLocaleTimeString()}</td>
                    <td>{period.subject}</td>
                    <td>{period.teacher}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
        

       </div>
      );
    };

export default UpcomingClasses;