/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { UserOutlined } from "@ant-design/icons";
import { Typography, Avatar, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const { Item, Divider } = Menu;

function Header() {
  const items = [
    {
      key: '1',
      label: (
        <Link to='/user/bca'>BCA</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/user/bbm'>BBM</Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to='/user/bbs'>BBS</Link>
      ),
    },
  ];

  // const profile = (
  //   <Menu>
  //     <Item key="0">
  //       <a href="https://www.antgroup.com">1st menu item</a>
  //     </Item>
  //     <Item key="1">
  //       <a href="https://www.aliyun.com">2nd menu item</a>
  //     </Item>
  //     <Divider />
  //     <Item key="2">3rd menu item</Item>
  //   </Menu>
  // );

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

          {/* <div className="menuitem">
            <Dropdown overlay={<Menu>{items.map(item => <Menu.Item key={item.key}>{item.label}</Menu.Item>)}</Menu>} placement="bottomLeft">
              <Link className="bar font-semibold">
                DEPARTMENT
              </Link>
            </Dropdown>
          </div>
        </div> */}

        <div className="menuitem">
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Link className="bar font-semibold">
                DEPARTMENT
              </Link>
            </Dropdown>
          </div>
        </div>

        {/* <Dropdown overlay={profile} placement="bottomRight">
          <button className="border border-custom-blue-500 p-1 px-2 rounded-xl">
            <span className="mr-5">John Doe</span>
            <Avatar icon={<UserOutlined />} />
          </button>
        </Dropdown> */}

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
