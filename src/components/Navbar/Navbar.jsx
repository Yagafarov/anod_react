import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, ShoppingOutlined, MailOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <Menu mode="horizontal" style={{display:'flex',justifyContent:'center'}} >
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="cart" icon={<ShoppingOutlined />}>
                Cart
            </Menu.Item>
            <Menu.Item key="contact" icon={<MailOutlined />}>
                Contact Us
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
