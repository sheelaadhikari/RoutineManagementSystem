/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Typography, Avatar, Dropdown, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const items = [
    {
      key: "1",
      label: <Link to="/bca">BCA</Link>,
    },
    {
      key: "2",
      label: <Link to="/bbm">BBM</Link>,
    },
    {
      key: "3",
      label: <Link to="/bbs">BBS</Link>,
    },
  ];

  return (
    <div className="bg-custom-blue-200 flex justify-between w-full">
      <div className="flex justify-center items-center space-x-2">
        <div className="logo  bg-black h-14 w-14 flex justify-center items-center rounded-full ml-2">
          <Typography.Title level={4} style={{ color: "white" }}>
            Logo
          </Typography.Title>
        </div>
        {/* <div className="title text-3xl">Routine Management System</div> */}
      </div>
      <div className="p-6 flex justify-center items-center">
        <div className="menu flex space-x-12 mr-12 ">
          <div className="menuitem ">
            <Link to="/dashboard" className="bar font-semibold">
              HOME
            </Link>
          </div>

          <div className="menuitem">
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Link className="bar font-semibold">DEPARTMENT</Link>
            </Dropdown>
          </div>
        </div>

      
          <Link  to="/admindashboard" className="bar font-semibold">John Doe</Link>
          <Avatar icon={<UserOutlined />} />
      
      </div>
    </div>
  );
}

export default Header;
