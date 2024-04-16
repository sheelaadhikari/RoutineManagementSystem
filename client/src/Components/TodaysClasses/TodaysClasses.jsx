/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TodaysClasses = () => {
  const [routine, setRoutine] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await axios.get(
  //         "http://localhost:8001/api/v1/bca/get-singledr/Monday"
  //       );
  //       setRoutine(res.data);
  //       console.log("the data is ", res.data)// Assuming the response is the entire object
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='table-one'>
      <h2>{loading ? "Loading..." : "All Routines of today"}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Program Name</th>
            <th>Semester</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Subject</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {/* {routine.singleroutine && routine.singleroutine.periods && routine.singleroutine.periods.map((period) => (
            <tr key={period._id}>
              <td>{routine.programname} BCA</td>
              <td>{routine.semester} 1</td>
              <td>{routine.singleroutine.day}</td>
              <td>{new Date(period.startTime).toLocaleTimeString()}</td>
              <td>{new Date(period.endTime).toLocaleTimeString()}</td>
              <td>{period.subject}</td>
              <td>{period.teacher}</td>
            </tr>
          ))} */}
        </tbody>

      </table>
          List of todays classes

    </div>
  );
};

export default TodaysClasses;
