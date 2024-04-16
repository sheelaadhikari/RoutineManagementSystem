/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { UserOutlined } from "@ant-design/icons";
import { Typography, Avatar, Dropdown, Menu } from "antd";
import React,{useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import './Header.css';
import { readDepartment, readSingleDepartment } from "../../store/slice/DepartmentSlice";
import { useDispatch, useSelector } from 'react-redux'
const { Item, Divider } = Menu;
import { AuditOutlined,SettingOutlined } from "@ant-design/icons";

function Header() {

  
const dispatch=useDispatch();
const {department,loading}=useSelector((state)=>state.departmentapp);
const {listdepartment,singledepartment}=department;

const {departmentname}=useParams();

useEffect(()=>{
    dispatch(readDepartment());
},[dispatch]);



if(loading){
  return <p>Loading...</p>
}

  const profile = [
    {
      key: '1',
      label: (
        <Link to='/user/1'>Profile</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/user/2'>Account</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to='/user/logout'>Logout</Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link to='/user/super-dashboard'>Super Admin Dashboard</Link>
      ),
    },
  ];
  

  return (
    <div className="bg-custom-blue-200 flex justify-between w-full">
      <div className="flex justify-center items-center space-x-2" >
        <div className="logo  bg-black h-14 w-14 flex justify-center items-center rounded-full ml-2">
          <Typography.Title level={4} style={{ color: 'white' }}>
            Logo
          </Typography.Title>
        </div>
      </div>
      <div className="p-6 flex justify-center items-center">
        <div className="menu flex space-x-12 mr-12 ">
          <div className="menuitem ">
            <Link to='/home' className="bar font-semibold" >HOME</Link>
          </div>

          <div className="menuitem">
          <Dropdown overlay={<Menu>{listdepartment.alldepartments && listdepartment.alldepartments.map((item) => <Menu.Item key={item._id?.toString()}><Link to={`/user/department/${item.name}`}></Link>{item.name}</Menu.Item>)}
          <Menu.Item key="static-option" className="border-t-2 border-black">
          <SettingOutlined />
            <Link to='/user/managedepartment' className="ml-1">Manage</Link>
            </Menu.Item>
          </Menu>} 
           
           placement="bottomLeft">
              <Link className="bar font-semibold">
                DEPARTMENT
              </Link>
            </Dropdown>
          </div>

        </div>

<Dropdown overlay={<Menu>{profile.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>} placement="bottomRight" trigger={['click']}>
          <button className="border border-custom-blue-500 p-1 px-2 rounded-xl">
            <span className="mr-5">John Doe</span>
            <Avatar icon={<UserOutlined />} />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
