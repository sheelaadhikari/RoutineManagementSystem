import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ContainerOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Menu, Typography } from 'antd';
import { PolylineRounded } from '@mui/icons-material';

const { Text } = Typography; // Destructure Text component from Typography

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Home', '1', <HomeOutlined style={{fontSize:22}}/>),
  getItem('Search', '2', <SearchOutlined style={{fontSize:22}}/>),
  getItem('Department', '3', <PolylineRounded style={{fontSize:22}}/>),
  getItem('Add', '4', <PlusOutlined style={{fontSize:22}}/>),
  getItem('Profile', '5', <UserOutlined style={{fontSize:22}}/>),
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    
    <div>
      <div
        style={{
          backgroundColor: '#B4B9ED',
          border: '1px solid #7C83CC',
          borderTopRightRadius: 20,
        }}
      >
        <Button type='text' onClick={toggleCollapsed} style={{ marginBottom: 2, outline: 'none' }}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            backgroundColor: '#B4B9ED',
            borderTop: '1px solid #7C83CC',
            height:'78.3vh',
            width: collapsed ? 90 : 200,
          }}
        >
            {/* {items.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Text className='font-medium text-base'>{item.label}</Text> {/* Customize font size */}
          {/* </Menu.Item>
        ))}   */} 
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
