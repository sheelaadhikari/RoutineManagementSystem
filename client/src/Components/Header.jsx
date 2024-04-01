/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SearchOutlined ,UserOutlined} from "@ant-design/icons";
import { Typography,Avatar } from "antd";
import React from "react";

function Header() {
  return (
    <div className="bg-custom-blue-200 flex justify-between w-full">
      <div className="flex justify-center items-center space-x-2" >
        <div className="logo  bg-black h-14 w-14 flex justify-center items-center rounded-full ml-2">
        <Typography.Title level={4} style={{color:'white'}}
       >
        Logo
      </Typography.Title>
        </div>
      <div className="title text-3xl">Routine Management System</div>
      </div>
      <div className="p-6 flex justify-center items-center">
        <button className="border border-custom-blue-500 p-1 px-2 rounded-xl">
          <span className="mr-5">John Doe</span>
        <Avatar icon={<UserOutlined />} />
        </button>
      </div>
    </div>
  );
}

export default Header;
