import React from 'react';
import { Menu, Dropdown, Button } from 'antd';
import logo from '../../assets/images/logo.svg';
import { ImMenu } from 'react-icons/im';

import './index.scss';

function Header() {
    const menu = (
        <Menu className='menu'>
            <Menu.Item key="0">
            <a href="https://www.antgroup.com">[Home]</a>
            </Menu.Item>
            <Menu.Item key="1">
            <a href="https://www.aliyun.com">[About]</a>
            </Menu.Item>
            <Menu.Item key="2">
            <a href="https://www.aliyun.com">[Projects]</a>
            </Menu.Item>
            <Menu.Item key="3">
            <a href="https://www.aliyun.com">[Contact]</a>
            </Menu.Item>   
        </Menu>
    );

    return(
        <div className='header'>
            <img className='image2' src={logo} alt='Profile'/>
            <nav className='navbar'>
                    <a href="/">[Home]</a>
              
                    <a href="/about">[About]</a>
               
                    <a href="/projects">[Projects]</a>
                
                    <a href="/contact">[Contact]</a>
            </nav>
                <Dropdown className='dropdown' overlay={menu} trigger={['click']} placement='bottomRight'>
                    <Button className='buttonMenu'><ImMenu></ImMenu></Button>
                </Dropdown>
        </div>
    )
}

export default Header;