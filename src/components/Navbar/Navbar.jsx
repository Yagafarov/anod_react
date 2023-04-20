import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined,MailOutlined,ShoppingOutlined } from '@ant-design/icons';
import './Navbar.css'
const Navbar = () => {
    const menuItems = [
        {
            title:'Home',
            key:'home',
            icon:  <HomeOutlined />
        },
        {
            title: 'About',
            key: 'about',
            icon: <InfoCircleOutlined />
        },
        {
            title: 'Card',
            key: 'card',
            icon: <ShoppingOutlined />
        },
        {
            title:'Contact',
            key: 'contact',
            icon: <MailOutlined />
        }
    ];

    const handleMenuClick = (e) => {
        const sectionId = menuItems.find((item) => item.key === e.key).key;
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Menu  onClick={(e) => handleMenuClick(e)}  mode="horizontal" style={{display:'flex',justifyContent:'center'}} className={"navbar"}>
            {
                menuItems.map((item)=>(
                    <Menu.Item key={item.key} icon={item.icon}>{item.title}</Menu.Item>
                ))
            }
        </Menu>
    );
};
export default Navbar;
