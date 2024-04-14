import React, { useState, useEffect } from 'react';
import Header from '../../../Components/Header/Header';
import Filter from '../../../Components/Filter/Filter';
import Tables from '../../../Components/Tables/Tables';
import { Button } from 'antd';

const Bca = () => {
  const initialData = [
    {
      key: '1',
      faculty: 'BCA',
      semester: '1',
      period: 32,
      teacher: '10 Downing Street',
    },
    {
      key: '2',
      faculty: 'BCA',
      semester: '2',
      period: 42,
      teacher: '10 Downing Street',
    },
  ];

  const [data, setData] = useState(initialData);

  const columns = [
    {
      title: 'Faculty',
      dataIndex: 'faculty',
      key: 'faculty',
    },
    {
      title: 'Semester',
      dataIndex: 'semester',
      key: 'semester',
    },
    {
      title: 'Period',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'teacher',
    },
  ];

  const handleFilter = (selectedSemesters) => {
    const filteredData = selectedSemesters.length > 0 ?
      initialData.filter(item => selectedSemesters.includes(item.semester)) :
      initialData;
    setData(filteredData);
  };

  return (
    <div className='w-screen'>
      <Header />
      <div className="">
        <div className="flex justify-between p-8">
          <Button className="btn border-gray-400 font-semibold w-32 ml-24" size='large'>All</Button>
          <Filter onFilter={handleFilter} />
        </div>
        <div className="box flex justify-center items-center">
          <div className="table border border-black w-4/5">
            <Tables data={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bca;
